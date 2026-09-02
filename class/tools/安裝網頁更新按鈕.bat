@echo off
chcp 65001 >nul
setlocal
set "TARGET=%~dp0更新課程.bat"

echo ============================================
echo    課程小幫手 - 啟用網頁上的「更新」按鈕
echo ============================================
echo.
echo  這個動作會在「這台電腦」註冊一個專用網址（courseupdate://），
echo  讓課程小幫手網頁上的「更新」按鈕可以叫得動底下這支程式：
echo.
echo    %TARGET%
echo.
echo  只寫入你自己的帳號設定（HKCU），不需要系統管理員權限，
echo  隨時可以用同資料夾的「移除網頁更新按鈕.bat」還原。
echo.
pause

if not exist "%TARGET%" (
  echo.
  echo  找不到 更新課程.bat，請確認這兩個檔案在同一個資料夾。
  pause
  exit /b 1
)

reg add "HKCU\Software\Classes\courseupdate" /ve /t REG_SZ /d "URL:課程小幫手更新" /f >nul
if errorlevel 1 goto fail
reg add "HKCU\Software\Classes\courseupdate" /v "URL Protocol" /t REG_SZ /d "" /f >nul
if errorlevel 1 goto fail
reg add "HKCU\Software\Classes\courseupdate\shell\open\command" /ve /t REG_SZ /d "\"%TARGET%\" \"%%1\"" /f >nul
if errorlevel 1 goto fail

echo.
echo  完成！現在到課程小幫手網頁按右上角的「⚡ 更新」，
echo  瀏覽器會問你要不要開啟，按「開啟」就會跑更新。
echo.
pause
exit /b 0

:fail
echo.
echo  設定失敗，請把畫面截圖給 Claude 看。
pause
exit /b 1
