// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { shallow } from "enzyme";
import { List } from "immutable";
import * as React from "react";
import BetterLuck from "../../src/components/better-luck-banner";
import ColourSelect from "../../src/components/colour-select";
import Congratulations from "../../src/components/congratulations-banner";
import { Colour } from "../../src/model/colour";

describe("<GameBoard/>", function() {
  const gameBoardModule = require("inject-loader!../../src/components/game-board");

  const GameBoardWithInjection = gameBoardModule({
    "../containers/colour-select-container": {
      default: () => (
        <ColourSelect
          onColourSelected={(c: Colour) => { return; }}
          availableColours={List()}
          isGameOver={false} />),
    },
  }).default;

  describe("Win Message", function() {
    it("is shown when isGameWon is true", function(done) {
      const wrapper = shallow(
        <GameBoardWithInjection
          data={[]}
          isGameWon={true}
          isGameLost={false}
          onNewGamePrompt={() => { return; }}
          showModal={(e: JSX.Element) => {
            expect(e.type).to.equal((<Congratulations />).type);
            done();
          }} />,
      );

      wrapper.instance().componentDidUpdate({}, {}, {});
    });
  });

  describe("Better Luck Message", function() {
    it("is shown when isGameLost is true", function(done) {
      const wrapper = shallow(
        <GameBoardWithInjection
          data={[]}
          isGameWon={false}
          isGameLost={true}
          onNewGamePrompt={() => { return; }}
          showModal={(e: JSX.Element) => {
            expect(e.type).to.equal((<BetterLuck />).type);
            done();
          }} />,
      );

      wrapper.instance().componentDidUpdate({}, {}, {});
    });
  });
});
