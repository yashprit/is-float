"use strict";
var assert = require("assert");
var isFloat = require("./");

var gOPN = Object.getOwnPropertyNames.bind(Object);
var getMathTestName = (function () {
  var PREFIX = "Math.",
      SUFFIX = " should be true";

  return function (k) {
    return PREFIX + k + SUFFIX;
  };
})();

gOPN(Math).filter(function (k) {
  return typeof Math[k] !== "function";
}).forEach(function (k) {
  var name = getMathTestName(k);

  it(name, function () {
    assert.ok(isFloat(Math[k]), name);
  });
});

it("float should be true", function() {
  assert.equal(true, isFloat(2.5));
});

it("float should be false with zero", function() {
  assert.equal(false, isFloat(2.0));
});

it("float should be false zero after decimal point", function() {
  assert.equal(false, isFloat(2.00));
});

it("float should be true", function() {
  assert.equal(true, isFloat(2.01));
});

it("false if number contains dot", function() {
  assert.equal(false, isFloat(2.));  // jshint ignore:line
});

it("true even if number is very large", function() {
  assert.equal(true, isFloat(1.7976931348623157e+308));
});

it("true for MAX_SAFE_INTEGER", function() {
  assert.equal(true, isFloat(9007199254740000.90));
});

it("should be true if we coerce a string float", function() {
  assert.equal(true, isFloat("2.7", true));
});

it("string should be false", function() {
  assert.equal(false, isFloat("foo"));
});

it("object should be false", function() {
  assert.equal(false, isFloat({
    foo: "bar"
  }));
});

it("boolean should be false", function() {
  assert.equal(false, isFloat(true));
  assert.equal(false, isFloat(true, true));
});

it("array should be false", function() {
  assert.equal(false, isFloat([2]));
});

it("number should be false", function() {
  assert.equal(false, isFloat(1));
});
