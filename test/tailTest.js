const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [one] for [one]", () => {
    assert.deepEqual(tail(["one"]), ["one"]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });


});