'use strict';

/**
 * urlBuilder
 *
 * @param  {object} params
 * @param  {string} params.base       the base url
 * @param  {array}  params.libraries  an array of the libraries to be requested
 * @param  {string} params.callback   the callback function
 *
 * @return {string}
 */
function urlBuilder(params) {
  let url = params.base;

  url += '?';

  if (params.apiKey) {
    url += 'key=' + params.apiKey + '&';
  }

  if (params.client) {
    url += 'client=' + params.client + '&';
  }

  if (params.libraries.length > 0) {
    url += 'libraries=';

    params.libraries.forEach(function(library, index) {
      url += library;

      if (index !== params.libraries.length - 1) {
        url += ',';
      }
    });

    url += '&';
  }

  if (params.language) {
    url += 'language=' + params.language + '&';
  }

  if (params.version) {
    url += 'v=' + params.version + '&';
  }

  url += 'callback=' + params.callback;

  return url;
}

module.exports = urlBuilder;
