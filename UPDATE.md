# Updating the College Tour 2026 Webapp

The webapp reads all content from `itinerary.json`. To push an update from Claude Chat:

## From the "Theo College Trip" Claude Chat project

Tell Claude: **"Update the webapp with these changes: [describe what changed]"**

Claude will:
1. Generate an updated `itinerary.json` reflecting the changes
2. Use the GitHub MCP `push_files` tool to commit it to this repo:
   - **Owner:** `haubenberger`
   - **Repo:** `OpenClaw`
   - **Branch:** `main` (or whichever branch GitHub Pages is serving)
   - **File:** `itinerary.json`
3. GitHub Pages will pick up the change within ~30 seconds

## Setting up GitHub Pages

1. Go to `https://github.com/haubenberger/OpenClaw/settings/pages`
2. Source: **Deploy from a branch**
3. Branch: **main** (root folder)
4. Save — your site will be at `https://haubenberger.github.io/OpenClaw/`

## What gets updated

Only `itinerary.json` needs to change for content updates. The HTML/CSS/JS in `index.html` stays the same unless you want to change the layout.

## JSON structure reference

Key sections in `itinerary.json`:
- `meta` — version, created date, travelers
- `summary` — the top summary table (flights, cars, key events)
- `timeline` — day-by-day schedule (array, one object per day)
- `actionItems` — open todos, done list, cancelled
- `campusVisits` — college visit details (A entries)
- `eventsAndTransport` — games, movie, ferry, Amtrak, car rentals (B entries)
- `lodging` — hotels + friends' places (C entries)
- `weather` — typical weather table (E section)
