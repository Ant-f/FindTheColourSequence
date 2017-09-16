// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { mount, ReactWrapper } from "enzyme";
import * as React from "react";
import HowToPlayPanel, { IHowToPlayPanelState } from "../../src/components/how-to-play/how-to-play-panel";
import * as styles from "../../stylesheets/sass/how-to-play.scss";

describe("<HowToPlayPanel/>", function() {
  const makingGuessesModule = require("inject-loader!../../src/components/how-to-play/how-to-play-panel");

  const HowToPlayPanelWithInjection = makingGuessesModule({
    "./making-guesses": {
      default: () => (
        <div />),
    },
  }).default;

  describe("Next page button", function() {
    it("increments displayed page number", function() {

      // Arrange

      const wrapper = mount(
        <HowToPlayPanelWithInjection onExitPanel={() => { return; }} />,
      );

      const initialState: IHowToPlayPanelState = {
        currentPage: 1,
      };

      wrapper.setState(initialState);

      const nextButton = wrapper
        .find("button")
        .findWhere((w: ReactWrapper) => w.text().indexOf("Next") > -1);

      // Act

      nextButton.simulate("click");

      // Assert

      const instance = wrapper.instance() as HowToPlayPanel;

      const pageDisplay = wrapper
        .findWhere((w: ReactWrapper) => w.hasClass(styles.pageNumber));

      expect(pageDisplay.text()).to.contain(`2/${instance.maxHelpPageCount}`);
    });
  });

  describe("Prev page button", function() {
    it("decrements displayed page number", function() {

      // Arrange

      const wrapper = mount(
        <HowToPlayPanelWithInjection onExitPanel={() => { return; }} />,
      );

      const initialState: IHowToPlayPanelState = {
        currentPage: 2,
      };

      wrapper.setState(initialState);

      const nextButton = wrapper
        .find("button")
        .findWhere((w: ReactWrapper) => w.text().indexOf("Prev") > -1);

      // Act

      nextButton.simulate("click");

      // Assert

      const instance = wrapper.instance() as HowToPlayPanel;

      const pageDisplay = wrapper
        .findWhere((w: ReactWrapper) => w.hasClass(styles.pageNumber));

      expect(pageDisplay.text()).to.contain(`1/${instance.maxHelpPageCount}`);
    });
  });
});
