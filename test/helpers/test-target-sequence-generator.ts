// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { Map } from "immutable";
import { given } from "mocha-testdata";
import generateTargetSequence from "../../src/helpers/target-sequence-generator";
import { Colour } from "../../src/model/colour";

describe("Target Sequence Generator", function() {
  given(1, 2, 3, 4).it("generates a sequence of equal length", function(arg: number) {

    // Arrange, Act

    const result = generateTargetSequence(arg, false);

    // Assert

    expect(result.size).to.equal(arg);
  });

  given(true, false)
    .it("generates sequence with duplicate colours only if specified",
    function(allowDuplicates: boolean) {

      // Arrange

      const colourCount = Map<Colour, Colour>(Colour)
        .filter((c: Colour) => c !== Colour.None)
        .size;

      // Act

      const result = generateTargetSequence(colourCount, allowDuplicates);

      // Assert

      const colourSet = result.toSet();
      const hasDuplicates = colourSet.size !== result.size;
      expect(hasDuplicates).to.equal(allowDuplicates);
    });
});
