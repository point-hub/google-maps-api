'use strict';

const expect = require('chai').expect;

const urlBuilder = require('../src/url-builder.js');

describe('urlBuilder', function() {

  let url;

  before(function() {
    url = urlBuilder({
      base: 'https://maps.googleapis.com/maps/api/js',
      libraries: ['places', 'geometry'],
      language: 'en',
      version: 3,
      callback: 'apiLoaded'
    });
  });

  it('Should return a string', function() {
    expect(url).to.be.a('string');
  });

  it('Should match the param structure', function() {
    var paramSection = url.split('?')[1];

    expect(paramSection).to.be.a('string');
    expect(paramSection).to.have.string('libraries=places,geometry');
    expect(paramSection).to.have.string('&language=en');
    expect(paramSection).to.have.string('&v=3');
    expect(paramSection).to.have.string('&callback=apiLoaded');
  });
});