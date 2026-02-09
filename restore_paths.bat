@echo off
cd /d d:\miniproject
for %%f in (*.html) do (
    powershell -Command "(Get-Content '%%f') -replace 'href=\"../css/', 'href=\"styles/' -replace 'src=\"../js/', 'src=\"scripts/' | Set-Content '%%f'"
)
echo All paths restored!
