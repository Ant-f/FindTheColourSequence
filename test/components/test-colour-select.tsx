// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { shallow, ShallowWrapper } from "enzyme";
import { List } from "immutable";
import { given } from "mocha-testdata";
import * as React from "react";
import ColourSelect from "../../src/components/colour-select";
import { Colour } from "../../src/model/colour";
import * as buttons from "../../stylesheets/sass/buttons.scss";

const wrapColourSelect = (isGameOver: boolean): ShallowWrapper => {
  const wrapper = shallow(
    <ColourSelect
      onColourSelected={(c: Colour) => { return; }}
      availableColours={List([Colour.Blue, Colour.Red])}
      isGameOver={isGameOver} />);

  return wrapper;
};

describe("<ColourSelect/>", function() {
  describe("colour input", function() {
    given(true, false).it("is disabled if game is over", function(isGameOver: boolean) {

      const wrapper = wrapColourSelect(isGameOver);
      const allDisabled = wrapper.find("button").every("[disabled=true]");
      expect(allDisabled).to.equal(isGameOver);
    });
  });

  describe("hover halo", function() {
    given(true, false).it("is disabled if game is over", function(isGameOver: boolean) {

      const wrapper = wrapColourSelect(isGameOver);

      const allDisabled = wrapper
        .find("button")
        .map((n) => n.hasClass(buttons.hoverHalo))
        .every((hasHoverHalo: boolean) => !hasHoverHalo);

      expect(allDisabled).to.equal(isGameOver);
    });
  });
});
