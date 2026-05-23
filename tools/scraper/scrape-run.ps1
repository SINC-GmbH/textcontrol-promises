# Internal runner — called by scrape.ps1 inside the new terminal window.
# Do not invoke directly; use scrape.ps1 instead.
param([Parameter(ValueFromRemainingArguments)][string[]]$ScraperArgs)

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..\..')
Set-Location $repoRoot

Write-Host 'TX TextControl Scraper' -ForegroundColor Cyan
Write-Host ''

if ($ScraperArgs) {
    npx ts-node tools/scraper/src/index.ts @ScraperArgs
} else {
    npx ts-node tools/scraper/src/index.ts
}

Write-Host ''
Write-Host 'Finished. Press any key to close...' -ForegroundColor Green
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
