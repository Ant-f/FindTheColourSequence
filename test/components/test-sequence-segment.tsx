// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { shallow } from "enzyme";
import { given } from "mocha-testdata";
import * as React from "react";
import SequenceSegment from "../../src/components/sequence-segment";
import { Colour } from "../../src/model/colour";
import * as buttons from "../../stylesheets/sass/buttons.scss";
import * as styles from "../../stylesheets/sass/sequence-segments.scss";

const getClassSelector = (...classNames: string[]): string => {
  const selector = classNames
    .map((n: string) => `.${n}`)
    .join(" ");

  return selector;
};

describe("<SequenceSegment/>", function() {
  describe("hover halo", function() {
    given(true, false).it("is disabled if game is over", function(isGameOver: boolean) {

      const wrapper = shallow(<SequenceSegment
        onPositionSelected={(a: number, s: number) => { return; }}
        attemptId={0}
        colour={Colour.None}
        segmentId={0}
        activeAttemptId={0}
        activeSegmentId={0}
        isGameOver={isGameOver} />);

      const allDisabled = wrapper
        .find("button")
        .map((n) => n.hasClass(buttons.hoverHalo))
        .every((hasHoverHalo: boolean) => !hasHoverHalo);

      expect(allDisabled).to.equal(isGameOver);
    });
  });

  describe("pulsing halo", function() {

    const pulsingHalo = getClassSelector(
      styles.haloContainer,
      styles.visible);

    it("is rendered when segment and attempt IDs match", function() {
      const wrapper = shallow(<SequenceSegment
        onPositionSelected={(a: number, s: number) => { return; }}
        attemptId={0}
        colour={Colour.None}
        segmentId={0}
        activeAttemptId={0}
        activeSegmentId={0}
        isGameOver={false} />);

      expect(wrapper.find(pulsingHalo).exists()).to.equal(true);
    });

    it("is not rendered when segment and attempt IDs do not match", function() {
      const wrapper = shallow(<SequenceSegment
        onPositionSelected={(a: number, s: number) => { return; }}
        attemptId={1}
        colour={Colour.None}
        segmentId={1}
        activeAttemptId={0}
        activeSegmentId={0}
        isGameOver={false} />);

      expect(wrapper.find(pulsingHalo).exists()).to.equal(false);
    });

    it("is not rendered when game is over", function() {
      const wrapper = shallow(<SequenceSegment
        onPositionSelected={(a: number, s: number) => { return; }}
        attemptId={0}
        colour={Colour.None}
        segmentId={0}
        activeAttemptId={0}
        activeSegmentId={0}
        isGameOver={true} />);

      expect(wrapper.find(pulsingHalo).exists()).to.equal(false);
    });
  });

  describe("segment selection", function() {
    given(true, false).it("is disabled if game is over", function(isGameOver: boolean) {

      const wrapper = shallow(<SequenceSegment
        onPositionSelected={(a: number, s: number) => { return; }}
        attemptId={0}
        colour={Colour.None}
        segmentId={0}
        activeAttemptId={0}
        activeSegmentId={0}
        isGameOver={isGameOver} />);

      const allDisabled = wrapper.find("button").every("[disabled=true]");
      expect(allDisabled).to.equal(isGameOver);
    });
  });
});
