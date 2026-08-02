# 開啟 Claude Code 的思考摘要顯示
# 在 ~\.claude\settings.json 加入 "showThinkingSummaries": true
# 可重複執行，不會覆蓋既有設定

$ErrorActionPreference = 'Stop'

$settingsPath = Join-Path $env:USERPROFILE '.claude\settings.json'
$settingsDir = Split-Path -Parent $settingsPath

if (-not (Test-Path -LiteralPath $settingsDir)) {
    New-Item -ItemType Directory -Force -Path $settingsDir | Out-Null
    Write-Host "已建立 $settingsDir"
}

# --- 讀取既有設定 ---
$obj = $null
if (Test-Path -LiteralPath $settingsPath) {
    $raw = [System.IO.File]::ReadAllText($settingsPath)
    if ($raw.Trim()) {
        try {
            $obj = $raw | ConvertFrom-Json
        }
        catch {
            Write-Host "settings.json 不是合法的 JSON，請手動處理：$settingsPath" -ForegroundColor Red
            exit 1
        }
    }
}

if ($null -eq $obj) {
    $obj = New-Object PSObject
}

# --- 檢查目前狀態 ---
$already = $false
if ($obj.PSObject.Properties.Name -contains 'showThinkingSummaries') {
    if ($obj.showThinkingSummaries -eq $true) { $already = $true }
    $obj.showThinkingSummaries = $true
}
else {
    $obj | Add-Member -MemberType NoteProperty -Name 'showThinkingSummaries' -Value $true
}

if ($already) {
    Write-Host "showThinkingSummaries 本來就是 true，沒有變更。" -ForegroundColor Green
}
else {
    # 真的要寫入時才備份
    if (Test-Path -LiteralPath $settingsPath) {
        $backup = "$settingsPath.bak-" + (Get-Date -Format 'yyyyMMdd-HHmmss')
        Copy-Item -LiteralPath $settingsPath -Destination $backup
        Write-Host "已備份既有設定 -> $backup"
    }
    # JSON 檔不要 BOM
    $json = $obj | ConvertTo-Json -Depth 100
    [System.IO.File]::WriteAllText($settingsPath, $json, (New-Object System.Text.UTF8Encoding($false)))
    Write-Host "已寫入 showThinkingSummaries = true" -ForegroundColor Green
}

Write-Host ""
Write-Host "目前的 $settingsPath :"
Get-Content -LiteralPath $settingsPath -Encoding UTF8 | ForEach-Object { "  $_" }
Write-Host ""
Write-Host "請開一個新的 Claude Code 工作階段才會生效（重新載入視窗不夠）。" -ForegroundColor Yellow
