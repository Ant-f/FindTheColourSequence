// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { fromJS, Map, Set } from "immutable";
import { given } from "mocha-testdata";
import GenerateTargetSequence from "../../src/helpers/target-sequence-generator";
import AppState from "../../src/model/app-state";
import { Colour } from "../../src/model/colour";

describe("Target Sequence Generator", function() {
  given(1, 2, 3, 4).it("generates a sequence of equal length", function(arg: number) {

    // Arrange, Act

    const result = GenerateTargetSequence(arg);

    // Assert

    expect(result.size).to.equal(arg);
  });

  it("does not output sequence with duplicates colours", function() {

    // Arrange

    const colourCount = Map<Colour, Colour>(Colour)
      .filter((colour) => colour !== Colour.None)
      .size;

    // Act

    const result = GenerateTargetSequence(colourCount);

    // Assert

    const colourSet = result.toSet();
    expect(colourSet.size).to.equal(result.size);
  });
});
