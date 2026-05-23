# Opens a new Windows Terminal tab and runs the TX TextControl scraper.
# All arguments are forwarded to the scraper (e.g. --refresh, --update, --class Foo).
#
# Usage:
#   .\tools\scraper\scrape.ps1
#   .\tools\scraper\scrape.ps1 --refresh
#   .\tools\scraper\scrape.ps1 --refresh-urls
#   .\tools\scraper\scrape.ps1 --update

param([Parameter(ValueFromRemainingArguments)][string[]]$ScraperArgs)

$runner = Join-Path $PSScriptRoot 'scrape-run.ps1'

wt --window 0 new-tab --title "TX TextControl Scraper" powershell -NoExit -File "$runner" @ScraperArgs
