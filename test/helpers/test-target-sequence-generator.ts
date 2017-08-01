// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { fromJS, Map, Set } from "immutable";
import { given } from "mocha-testdata";
import TargetSequenceGenerator from "../../src/helpers/target-sequence-generator";
import AppState from "../../src/model/app-state";
import { Colour } from "../../src/model/colour";

describe("Target Sequence Generator", function() {
  given(1, 2, 3, 4).it("generates a sequence of equal length", function(arg: number) {

    // Arrange, Act

    const result = TargetSequenceGenerator(arg);

    // Assert

    expect(result.count()).to.equal(arg);
  });

  it("does not output sequence with duplicates colours", function() {

    // Arrange

    const colourCount = Map<Colour, Colour>(Colour)
      .filter((colour) => colour !== Colour.None)
      .count();

    // Act

    const result = TargetSequenceGenerator(colourCount);

    // Assert

    const colourSet = result.toSet();
    expect(colourSet.count()).to.equal(result.count());
  });
});
