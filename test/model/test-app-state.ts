// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { fromJS } from "immutable";
import AppState from "../../src/model/app-state";
import { Colour } from "../../src/model/colour";

describe("AppState", function() {
  it("Should allow total row count to be saved", function() {
    // Arrange
    const totalRowCount = 8;
    const appState = new AppState();

    // Act
    appState.totalRowCount = totalRowCount;

    // Assert
    expect(appState.totalRowCount).to.equal(totalRowCount);
  });

  it("Should allow colour rows to be saved", function() {
    // Arrange
    const colourRows = fromJS([
      [ Colour.None ],
    ]);

    const appState = new AppState();

    // Act
    appState.colourRows = colourRows;

    // Assert
    expect(appState.colourRows).to.equal(colourRows);
  });
});
