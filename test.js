'use strict';
var assert = require('assert');
var isFloat = require('./');

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
  assert.equal(false, isFloat(2.));
});

it("false if number is very large", function() {
  assert.equal(false, isFloat(1.7976931348623157e+308));
});

it("false for MAX_SAFE_INTEGER", function() {
  assert.equal(false, isFloat(9007199254740000.90));
});

it("should be false even if its finite", function() {
  assert.equal(true, isFloat("2.7"))
})

it("string should be false", function() {
  assert.equal(false, isFloat("foo"))
})

it("object should be false", function() {
  assert.equal(false, isFloat({
    foo: "bar"
  }))
})

it("boolean should be false", function() {
  assert.equal(false, isFloat(true))
})

it("array should be false", function() {
  assert.equal(false, isFloat([2]))
})

it("number should be false", function() {
  assert.equal(false, isFloat(1))
})
