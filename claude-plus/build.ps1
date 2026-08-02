# 把 src\ 打包成可安裝的 .vsix（不需要 node / npm / vsce）
# .vsix 本質就是特定結構的 zip

$ErrorActionPreference = 'Stop'

$root    = Split-Path -Parent $MyInvocation.MyCommand.Path
$src     = Join-Path $root 'src'
$stage   = Join-Path $root 'build'
$pkg     = Get-Content (Join-Path $src 'package.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$vsix    = Join-Path $root ("{0}-{1}.vsix" -f $pkg.name, $pkg.version)

if (Test-Path $stage) { Remove-Item $stage -Recurse -Force }
New-Item -ItemType Directory -Path $stage | Out-Null
New-Item -ItemType Directory -Path (Join-Path $stage 'extension') | Out-Null

# --- extension/ 內容 ---
foreach ($f in @('package.json', 'extension.js', 'inject.js', 'host-inject.js', 'README.md')) {
    $p = Join-Path $src $f
    if (Test-Path $p) { Copy-Item $p (Join-Path $stage "extension\$f") }
}

$utf8 = New-Object System.Text.UTF8Encoding($false)

# --- extension.vsixmanifest ---
$manifest = @"
<?xml version="1.0" encoding="utf-8"?>
<PackageManifest Version="2.0.0" xmlns="http://schemas.microsoft.com/developer/vsx-schema/2011" xmlns:d="http://schemas.microsoft.com/developer/vsx-schema-design/2011">
  <Metadata>
    <Identity Language="en-US" Id="$($pkg.name)" Version="$($pkg.version)" Publisher="$($pkg.publisher)" />
    <DisplayName>$($pkg.displayName)</DisplayName>
    <Description xml:space="preserve">$($pkg.description)</Description>
    <Tags></Tags>
    <Categories>Other</Categories>
    <GalleryFlags>Public</GalleryFlags>
    <Properties>
      <Property Id="Microsoft.VisualStudio.Code.Engine" Value="$($pkg.engines.vscode)" />
      <Property Id="Microsoft.VisualStudio.Code.ExtensionDependencies" Value="" />
      <Property Id="Microsoft.VisualStudio.Code.ExtensionPack" Value="" />
      <Property Id="Microsoft.VisualStudio.Code.ExtensionKind" Value="ui" />
      <Property Id="Microsoft.VisualStudio.Services.Links.Source" Value="" />
    </Properties>
  </Metadata>
  <Installation>
    <InstallationTarget Id="Microsoft.VisualStudio.Code" />
  </Installation>
  <Dependencies />
  <Assets>
    <Asset Type="Microsoft.VisualStudio.Code.Manifest" Path="extension/package.json" Addressable="true" />
    <Asset Type="Microsoft.VisualStudio.Services.Content.Details" Path="extension/README.md" Addressable="true" />
  </Assets>
</PackageManifest>
"@
[System.IO.File]::WriteAllText((Join-Path $stage 'extension.vsixmanifest'), $manifest, $utf8)

# --- [Content_Types].xml ---
$ctypes = @"
<?xml version="1.0" encoding="utf-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="json" ContentType="application/json" />
  <Default Extension="vsixmanifest" ContentType="text/xml" />
  <Default Extension="js" ContentType="application/javascript" />
  <Default Extension="md" ContentType="text/markdown" />
  <Default Extension="xml" ContentType="text/xml" />
</Types>
"@
[System.IO.File]::WriteAllText((Join-Path $stage '[Content_Types].xml'), $ctypes, $utf8)

# --- 打包 ---
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

if (Test-Path -LiteralPath $vsix) { Remove-Item -LiteralPath $vsix -Force }
$zip = [System.IO.Compression.ZipFile]::Open($vsix, 'Create')
try {
    # 用 .NET 列舉：檔名裡的 [Content_Types].xml 方括號會被 PowerShell 當萬用字元
    foreach ($full in [System.IO.Directory]::GetFiles($stage, '*', [System.IO.SearchOption]::AllDirectories)) {
        # zip 內的 entry name 一律用正斜線
        $rel = $full.Substring($stage.Length + 1).Replace('\', '/')
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $full, $rel) | Out-Null
        Write-Host ("  + {0}" -f $rel)
    }
}
finally {
    $zip.Dispose()
}

Remove-Item $stage -Recurse -Force
Write-Host ""
Write-Host ("完成: {0}  ({1:N0} bytes)" -f $vsix, (Get-Item -LiteralPath $vsix).Length)
