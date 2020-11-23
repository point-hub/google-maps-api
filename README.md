# Vue 3 Google Maps API

Provides a convenient wrapper for the Google Maps API, allowing it to be called in the promise syntax.

## Installation

```
npm install --save @point-hub/google-maps-api

or

yarn add @point-hub/google-maps-api
```

## Usage
1. Get your API key from Google
[https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key)

2. Use it in your app
```
var GoogleMapsApi = require('@point-hub/google-maps-api');

GoogleMapsApi({
  libraries: ['places'],
  apiKey: 'replace-this-with-your-api-key'
})
.then(function(googleApi) {
  var autocomplete = new googleApi.maps.places.AutocompleteService();
}, function(err) {
  console.error(err);
});
```