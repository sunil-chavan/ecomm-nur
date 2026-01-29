param(
  [string]$TargetPath
)

if (-not $TargetPath) {
  Write-Host "Usage: .\install.ps1 -TargetPath C:\path\to\laravel_project"
  exit 1
}

$source = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "Copying scaffold files from $source to $TargetPath..."

if (-not (Test-Path $TargetPath)) {
  Write-Host "Target path does not exist: $TargetPath" -ForegroundColor Red
  exit 1
}

Copy-Item -Path (Join-Path $source '*') -Destination $TargetPath -Recurse -Force

Write-Host "Done. Remember to run migrations and seeders in your Laravel app."
