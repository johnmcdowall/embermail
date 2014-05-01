document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Ember.testing = true;

import resolver from './helpers/resolver';
require('ember-qunit').setResolver(resolver);

function exists(selector) {
  return !!window.find(selector).length;
}

function getAssertionMessage(actual, expected, message) {
  return message || QUnit.jsDump.parse(expected) + " expected but was " + QUnit.jsDump.parse(actual);
}

function equal(actual, expected, message) {
  message = getAssertionMessage(actual, expected, message);
  QUnit.equal.call(this, actual, expected, message);
}

function strictEqual(actual, expected, message) {
  message = getAssertionMessage(actual, expected, message);
  QUnit.strictEqual.call(this, actual, expected, message);
}

function contains(selector, text) {
  return exists(selector + ":contains(" + text + ")");
}

import startApp from "embermail/tests/helpers/start-app";

function acceptance(name) {
  var App;

  module('acceptance:' + name, {
    setup: function() {
      App = startApp();
    },
    teardown: function() {
      Ember.run(App, App.destroy);
    }
  });
}

window.exists = exists;
window.equal = equal;
window.strictEqual = strictEqual;
window.contains = contains;
window.acceptance = acceptance;