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

## Setup

### Requirements
- Python(2.x or 3.x).
- Browser(preferabaly with service worker suuport).
- Mapbox API key.

### Installation
- Download/ clone the repository.
- Download python from Python's [website](https://www.python.org/). If you already have python, check its version through `python -v` command in terminal. 
- This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.
- In terminal change directory to the downloaded folder and run the command:
    - `python -m SimpleHTTPServer 8000` (or any other port) if Python 2.x
    - `python -m http.server 8000` (or any other port) if Python 3.x
- Go to browser and browse to URL: `https://localhost:8000` or your chosen port number.




