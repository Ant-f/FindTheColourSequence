// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { shallow } from "enzyme";
import { List } from "immutable";
import { given } from "mocha-testdata";
import * as React from "react";
import BetterLuck from "../../src/components/better-luck-banner";
import ColourSelect from "../../src/components/colour-select";
import Congratulations from "../../src/components/congratulations-banner";
import { Colour } from "../../src/model/colour";
import * as letteringStyles from "../../stylesheets/sass/font-lettering.scss";

interface INewGameButtonTestCase {
  isGameLost: boolean;
  isGameWon: boolean;
  shouldPulse: boolean;
}

const gameLost = {
  isGameLost: true,
  isGameWon: false,
  shouldPulse: true,
};

const gameWon = {
  isGameLost: false,
  isGameWon: true,
  shouldPulse: true,
};

const gameInProgress = {
  isGameLost: false,
  isGameWon: false,
  shouldPulse: false,
};

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

  describe("New Game Button", function() {
    given(gameLost, gameWon, gameInProgress).it("pulses when game is over", function(testCase: INewGameButtonTestCase) {
      const wrapper = shallow(
        <GameBoardWithInjection
          data={[]}
          isGameWon={testCase.isGameWon}
          isGameLost={testCase.isGameLost}
          onNewGamePrompt={() => { return; }}
          showModal={() => { return; }} />,
      );

      const newGameButton = wrapper.find({ children: "New Game" });
      const isPulsing = newGameButton.hasClass(letteringStyles.pulsingText);

      expect(isPulsing).to.equal(testCase.shouldPulse);
    });
  });
});
