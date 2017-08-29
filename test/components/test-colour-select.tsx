// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { shallow } from "enzyme";
import { List } from "immutable";
import * as React from "react";
import ColourSelect from "../../src/components/colour-select";
import { Colour } from "../../src/model/colour";

describe("<ColourSelect/>", function() {
  it("is disabled if game is over", function() {

    const wrapper = shallow(
      <ColourSelect
        onColourSelected={(c: Colour) => { return; }}
        availableColours={List([Colour.Blue])}
        isGameOver={true}/>,
    );

    const allDisabled = wrapper.find("button").every("[disabled=true]");
    expect(allDisabled).to.equal(true);
  });

  it("is enabled if game is not over", function() {

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
