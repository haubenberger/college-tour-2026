# College Tour 2026 — Webapp Update Spec

## Purpose & Owner Expectation

This webapp is the live, public-facing version of the College Tour 2026 itinerary. It is maintained under the **"Theo College Trip"** Claude Chat project (claude.ai), where the itinerary is actively being built and updated as the trip evolves.

**The owner's expectation is:**
> All itinerary updates happen naturally in the "Theo College Trip" Claude Chat. Claude in that chat is responsible for keeping this webapp in sync — no manual export, no copy-paste, no separate step required. When something changes in the chat (a schedule shift, a new booking, a cancelled item, a new action item), Claude should automatically push the updated `itinerary.json` to this repo as part of wrapping up that conversation turn.

This means Claude in the Theo College Trip chat should treat `itinerary.json` as the live output of every planning session, not just a one-time export.

---

## How Claude in "Theo College Trip" Should Update the Webapp

Whenever the itinerary changes, Claude should:

1. Regenerate the relevant sections of `itinerary.json` to reflect the new state
2. Bump `meta.version` (e.g. v6.0 → v6.1) and update `meta.created` to the current timestamp
3. Use the **GitHub MCP `push_files` tool** to commit directly to this repo:
   - **Owner:** `haubenberger`
   - **Repo:** `college-tour-2026`
   - **Branch:** `main`
   - **File path:** `itinerary.json`
   - **Commit message:** e.g. `"v6.1 — Pizzeria Beddia reserved, return flights confirmed"`
4. Confirm to the user that the webapp has been updated

The site at `haubenberger.at/collegetrip2026` will reflect the change within ~30 seconds.

---

## Trigger Phrases (for the Theo College Trip chat)

Claude should push an update when the user says things like:
- *"Update the webapp"*
- *"Push this to the site"*
- *"Reflect this change live"*
- *"Sync the itinerary"*

Claude may also proactively offer: *"Want me to update the webapp with these changes?"* after any planning change.

---

## What Lives Where

| What | Where |
|---|---|
| Live itinerary data | `itinerary.json` — edit this to update content |
| Webapp layout & logic | `index.html` — only touch if changing the UI |
| This spec | `UPDATE.md` |
| Public URL | `haubenberger.at/collegetrip2026` |
| GitHub repo | `github.com/haubenberger/college-tour-2026` |
| Source of truth | "Theo College Trip" Claude Chat project |

---

## JSON Structure Reference

Key sections in `itinerary.json`:
- `meta` — version, created date, travelers
- `summary` — top summary table (flights, cars, key events)
- `timeline` — day-by-day schedule (one object per day, in date order)
- `actionItems` — open todos, done list, cancelled items
- `campusVisits` — all college visit details (A-entries from the PDF)
- `eventsAndTransport` — games, movie, ferry, Amtrak, rental cars (B-entries)
- `lodging` — hotels + friends' places + weather table (C/E-entries)

When updating, only modify the sections that changed — the rest carries forward as-is.
