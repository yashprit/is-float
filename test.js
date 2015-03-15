'use strict';
var assert = require('assert');
var isFloat = require('./');

it("float should be true", function() {
  assert.equal(true, isFloat(2.5));
});

it("float should be true", function() {
  assert(true, isFloat(2.0));
});

it("float should be true", function() {
  assert(true, isFloat(2.00));
});

it("float should be true", function() {
  assert(true, isFloat(2.01));
});

it("true if number contains dot", function() {
  assert(true, isFloat(2.));
});

it("true if number is very large", function() {
  assert(true, isFloat(1.7976931348623157e+308));
});

it("true for MAX_SAFE_INTEGER", function() {
  assert(true, isFloat(9007199254740991.0));
});

it("should be false even if its finite", function() {
  assert(true, isFloat("2.7"))
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
