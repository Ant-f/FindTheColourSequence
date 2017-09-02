// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { shallow, ShallowWrapper } from "enzyme";
import { given } from "mocha-testdata";
import * as React from "react";
import TargetSequence from "../../src/components/target-sequence";
import * as styles from "../../stylesheets/sass/target-sequence.scss";

describe("<TargetSequence/>", function() {
  describe("shield", function() {
    given(true, false).it("is open if game is over", function(isGameOver: boolean) {

      const wrapper = shallow(
        <TargetSequence
          isGameOver={isGameOver}
          targetSequence={[]} />);

      const shield = wrapper.findWhere((w: ShallowWrapper) => w.hasClass(styles.shield));
      const isOpen = shield.hasClass(styles.shieldOpen);
      expect(isOpen).to.equal(isGameOver);
    });
  });
});
