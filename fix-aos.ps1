$files = Get-ChildItem -Path "D:\ACLEDA\Year-3-S-2\CS326-DevOps\final-project\hotel-booking\app\routes\*.tsx"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'data-aos="[^"]+"', 'data-aos="fade"'
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
