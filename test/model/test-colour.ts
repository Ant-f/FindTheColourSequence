// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { Map } from "immutable";
import { Colour, colourOrder } from "../../src/model/colour";

describe("colourOrder", function() {
  it("allows maxAttemptsCount to be set", function() {

    // Arrange, Act

    const numberMap = Map<Colour, number>(colourOrder);
    const numberSet = numberMap.valueSeq().toSet();

    // Assert

    expect(numberSet.size).to.equal(numberMap.size);
    expect(numberSet.min()).to.be.greaterThan(0);
  });
});
