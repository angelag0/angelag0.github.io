@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo    課程小幫手 - 更新課程資料
echo ============================================
echo.

node fetch-courses.js
if errorlevel 1 goto fail

echo.
echo 正在上傳到 GitHub...
cd ..\..
git add class/courses.json
git diff --cached --quiet -- class/courses.json
if errorlevel 1 (
  git commit -m "更新課程資料"
  if errorlevel 1 goto fail
  git push
  if errorlevel 1 goto fail
  echo.
  echo  完成！網頁已經是最新的了。
) else (
  echo.
  echo  課程沒有變動，不需要上傳。
)
echo.
pause
exit /b 0

:fail
echo.
echo  失敗了。請把上面的訊息截圖給 Claude 看。
echo.
pause
exit /b 1
