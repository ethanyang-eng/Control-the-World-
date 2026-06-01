# Neon Frontiers Web

Neon Frontiers Web is the desktop-browser version of the strategy game. It replaces the iOS/Xcode direction with a static browser game that runs locally.

## What Changed

- Real-country selection before play starts.
- A simplified world map made of actual land-shaped SVG regions rather than city dots, with islands joined into playable landmasses.
- Key countries include the United States, United Kingdom, Germany, France, Russia, China, India, Japan, Brazil, Canada, Mexico, Italy, Turkey, Egypt, Iran, Australia, and South Africa.
- Countries are split into internal states with visible border lines. USA has 7 states, Canada has 8, Germany has 4, and Russia has 10.
- Factories and housing are built on individual states instead of the whole country.
- Armies are physical color-coded regiment dots on the map, with only one regiment allowed per state.
- Enemy states must be selected and declared on before the player can attack them.
- The upgrade screen has branches for physical development, combat, logistics, and national doctrine. Upgrades affect factory income, regiment capacity, recruitment costs, attack strength, defense, and casualty rates.
- The UI is simpler: select a state, read its owner/regiment/factories/housing, then build, recruit, research, or attack.
- AI countries build, recruit, research, and attack without needing servers.

## Run It

From this folder:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

You can also open `index.html` directly in a browser, but the local server path is cleaner.

## Publish It

This folder is ready for GitHub Pages. See `GITHUB_PAGES.md` for upload steps.
