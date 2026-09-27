# The Philippines — Interactive Map

A minimal editorial-style Philippine map inspired by the reference site's restrained motion, typography and content hierarchy.

## Features
- Interactive 18-region Philippine map
- Hover/focus highlighting
- Search and direct region selection
- Animated region reveal and selection panel
- Responsive mobile/desktop layout
- Keyboard-accessible map regions
- prefers-reduced-motion support
- Loading and error states

## Run
npm install
npm run dev

## Build
npm run build
npm start

## Geographic data
The regional GeoJSON is loaded from the public NIR-aligned dataset maintained in the tordecilla/ph-drilldown-map project, which documents 18-region NIR alignment and PSGC identifiers. The UI in this repository is original.

## Next phase
The architecture is ready to extend from region -> province -> city/municipality -> barangay using PSGC-linked boundary datasets.
