// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { getColours } from "../../src/helpers/colour-helper";

describe("colour-helper", function() {
  it("returns specified number of colours", function() {

    // Arrange

    const expectedCount = 8;

    // Act

    const colours = getColours(expectedCount);

    // Assert

    expect(colours.size).to.equal(expectedCount);
  });
});
