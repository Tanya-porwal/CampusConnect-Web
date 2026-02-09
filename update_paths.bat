@echo off
cd /d d:\miniproject\html
for %%f in (*.html) do (
    powershell -Command "(Get-Content '%%f') -replace 'href=\"styles/', 'href=\"../css/' -replace 'src=\"scripts/', 'src=\"../js/' | Set-Content '%%f'"
)
echo All HTML files updated!
