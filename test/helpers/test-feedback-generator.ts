// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { List } from "immutable";
import { given } from "mocha-testdata";
import generateFeedback from "../../src/helpers/feedback-generator";
import { Colour } from "../../src/model/colour";

interface ITestParameters {
  attempt: Colour[];
  expectedBlack: number;
  expectedWhite: number;
  target: Colour[];
}

const test1: ITestParameters = {
  attempt: [Colour.Purple, Colour.Red, Colour.White, Colour.Yellow],
  expectedBlack: 0,
  expectedWhite: 0,
  target: [Colour.Black, Colour.Blue, Colour.Green, Colour.Orange],
};

const test2: ITestParameters = {
  attempt: [Colour.Purple, Colour.Red, Colour.White, Colour.Yellow],
  expectedBlack: 1,
  expectedWhite: 0,
  target: [Colour.Purple, Colour.Blue, Colour.Green, Colour.Orange],
};

const test3: ITestParameters = {
  attempt: [Colour.Purple, Colour.Red, Colour.White, Colour.Yellow],
  expectedBlack: 0,
  expectedWhite: 1,
  target: [Colour.Black, Colour.Blue, Colour.Green, Colour.Purple],
};

const test4: ITestParameters = {
  attempt: [Colour.White, Colour.White, Colour.Black, Colour.Black],
  expectedBlack: 3,
  expectedWhite: 0,
  target: [Colour.White, Colour.White, Colour.White, Colour.Black],
};

const test5: ITestParameters = {
  attempt: [Colour.Red, Colour.Green, Colour.Blue, Colour.Blue],
  expectedBlack: 0,
  expectedWhite: 2,
  target: [Colour.Blue, Colour.Blue, Colour.Yellow, Colour.Black],
};

const test6: ITestParameters = {
  attempt: [Colour.Red, Colour.Green, Colour.Blue, Colour.Blue],
  expectedBlack: 1,
  expectedWhite: 1,
  target: [Colour.Blue, Colour.Black, Colour.Yellow, Colour.Blue],
};

describe("Feedback Generator", function() {
  given(test1, test2, test3, test4, test5, test6)
    .it("returns appropriate feedback", function(testCase: ITestParameters) {

    // Arrange

    const targetSequence = List<Colour>(testCase.attempt);
    const sequenceToCheck = List<Colour>(testCase.target);

    // Act

    const feedback = generateFeedback(sequenceToCheck, targetSequence);

    // Assert

    const blackCount = feedback.count((c) => c === Colour.Black);
    const whiteCount = feedback.count((c) => c === Colour.White);
    const noneCount = feedback.count((c) => c === Colour.None);

    const expectedNone =
      targetSequence.size - (testCase.expectedBlack + testCase.expectedWhite);

    expect(feedback.size).to.equal(targetSequence.size);
    expect(blackCount).to.equal(testCase.expectedBlack, "Unexpected Black count");
    expect(whiteCount).to.equal(testCase.expectedWhite, "Unexpected White count");
    expect(noneCount).to.equal(expectedNone, "Unexpected None count");
  });

  it("sorts feedback colours", function() {

    // Arrange

    const targetSequence = List<Colour>([Colour.Black, Colour.Blue, Colour.Red]);
    const sequenceToCheck = List<Colour>([Colour.Blue, Colour.Purple, Colour.Red]);

    // Act

    const feedback = generateFeedback(sequenceToCheck, targetSequence);

    // Assert

    const expectedOrder = List<Colour>([Colour.Black, Colour.White, Colour.None]);
    expect(feedback.equals(expectedOrder)).to.equal(true);
  });
});
