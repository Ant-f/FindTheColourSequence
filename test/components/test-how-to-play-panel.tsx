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

    it("doesn't increments displayed page number past maximum", function() {

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

      const instance = wrapper.instance() as HowToPlayPanel;

      // Act

      for (let i = 0; i < instance.maxHelpPageCount; i++) {
        nextButton.simulate("click");
      }

      // Assert

      const pageDisplay = wrapper
        .findWhere((w: ReactWrapper) => w.hasClass(styles.pageNumber));

      const expected = `${instance.maxHelpPageCount}/${instance.maxHelpPageCount}`;
      expect(pageDisplay.text()).to.contain(expected);
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

    it("doesn't decrement displayed page number to zero", function() {

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
