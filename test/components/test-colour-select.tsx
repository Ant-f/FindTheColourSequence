// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { shallow } from "enzyme";
import { List } from "immutable";
import { given } from "mocha-testdata";
import * as React from "react";
import ColourSelect from "../../src/components/colour-select";
import { Colour } from "../../src/model/colour";
import * as buttons from "../../stylesheets/sass/buttons.scss";

describe("<ColourSelect/>", function() {
  describe("disabled", function() {
    it("is true if game is over", function() {

      const wrapper = shallow(
        <ColourSelect
          onColourSelected={(c: Colour) => { return; }}
          availableColours={List([Colour.Blue])}
          isGameOver={true} />,
      );

      const allDisabled = wrapper.find("button").every("[disabled=true]");
      expect(allDisabled).to.equal(true);
    });

    it("is false if game is not over", function() {

      const wrapper = shallow(
        <ColourSelect
          onColourSelected={(c: Colour) => { return; }}
          availableColours={List([Colour.Blue])}
          isGameOver={false} />,
      );

      const allEnabled = wrapper.find("button").every("[disabled=false]");
      expect(allEnabled).to.equal(true);
    });
  });

  describe("hover halo", function() {
    given(true, false).it("is disabled if game is over", function(isGameOver: boolean) {

      const wrapper = shallow(
        <ColourSelect
          onColourSelected={(c: Colour) => { return; }}
          availableColours={List([Colour.Blue, Colour.Red])}
          isGameOver={isGameOver} />,
      );

      const allDisabled = wrapper
        .find("button")
        .map((n) => n.hasClass(buttons.hoverHalo))
        .every((hasHoverHalo: boolean) => !hasHoverHalo);

      expect(allDisabled).to.equal(isGameOver);
    });
  });
});
