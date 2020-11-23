'use strict';

const Promise = require('es6-promise').Promise;
const urlBuilder = require('./url-builder.js');

let googleApi;

function loadGoogleMapsApi(params) {
  var script = document.createElement('script');

  script.type = 'text/javascript';

  script.src = urlBuilder({
    base: 'https://maps.googleapis.com/maps/api/js',
    libraries: params.libraries || [],
    callback: 'googleMapsApiLoaded',
    apiKey: params.apiKey,
    client: params.client,
    language: params.language,
    version: params.version
  });

  document.querySelector('head').appendChild(script);
}

/**
 * googleMapsApiLoader
 *
 * @param  {object} params
 * @param  {object} params.libraries
 *
 * @return {promise}
 */
function googleMapsApiLoader(params) {
  if (googleApi) {
    return Promise.resolve(googleApi);
  }
  return new Promise(function(resolve, reject) {
    loadGoogleMapsApi(params);

    window.googleMapsApiLoaded = function() {
      googleApi = window.google;
      resolve(googleApi);
    };
    setTimeout(function() {
      if (!window.google) {
        reject(new Error('Loading took too long'));
      }
    }, 5000);
  });
}
  
module.exports = googleMapsApiLoader;