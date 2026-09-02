@echo off
chcp 65001 >nul
echo ============================================
echo    課程小幫手 - 移除網頁上的「更新」按鈕
echo ============================================
echo.
echo  會把 courseupdate:// 這個專用網址從這台電腦移除。
echo  網頁本身和課程資料都不受影響。
echo.
pause

reg delete "HKCU\Software\Classes\courseupdate" /f >nul 2>&1
if errorlevel 1 (
  echo.
  echo  本來就沒有設定過，不用移除。
) else (
  echo.
  echo  已移除。網頁上的「更新」按鈕從此點了不會有反應。
)
echo.
pause
