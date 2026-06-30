param(
    [Parameter(Mandatory)]
    [string]$Folder
)

$sourceDir = Resolve-Path $Folder
$thumbnailDir = Join-Path $sourceDir "thumbnails"

Write-Host "Source: $sourceDir"
Write-Host "Thumbnails: $thumbnailDir"

New-Item -ItemType Directory -Force -Path $thumbnailDir | Out-Null

$images = Get-ChildItem $sourceDir -File |
    Where-Object { $_.Extension -match '\.(jpg|jpeg|png)$' }

Write-Host "Found $($images.Count) images"

foreach ($image in $images) {

    $output = Join-Path $thumbnailDir ($image.BaseName + ".webp")

    Write-Host "Converting $($image.Name)..."

    magick $image.FullName `
        -auto-orient `
        -resize "484x484>" `
        -quality 80 `
        $output
}
