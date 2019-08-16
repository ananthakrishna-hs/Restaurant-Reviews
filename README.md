# Restaurant Reviews
> Uses Mapbox maps API to fetch data of restaurants as JSON and feed to the interface.
---

## Webapp overview

This web app implements 'offline-first' features to get details and reviews of 10 restaurants through Mapbox API and user-interface filters.
Features of the web app:
- Responsive.
- Accessible.
- Offline-first(caching).

## Technologies used
- HTML5.
- CSS3.
- JavaScript.
- Cache API.
- Service Workers.
- Gulp.

## Setup

### Requirements
- `node` and `npm`.
- Browser(preferabaly with service worker suuport).
- Mapbox API key.
- Gulp(optional for development).

### Installation
- Download/clone the repository.
- Download `node` and `npm` from [Node official website](https://nodejs.org/en/) 
- This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.
- Download `Gulp` from [Gulp official website](https://gulpjs.com/). Install both `Gulp` and `Gulp-CLI`.
- In terminal change directory to the downloaded folder and:
  - For serving development files locally :-
    - `npm install`
    - `npm run server`
    - Go to browser and browse to URL: `https://localhost:8080` or your chosen port number.
  - For serving distribution files locally :-
    - `npm install`
    - `gulp`
    - In `package.json` file find `scripts` and change `"server": "http-server"` to
    `"server": "http-server ./dist"`
    - `npm run server`




