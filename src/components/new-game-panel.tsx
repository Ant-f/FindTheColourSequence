import * as React from "react";
import * as NewGamePanelProps from "../props/new-game-panel-props";
import ContentPanel from "./content-panel";

export default class extends React.PureComponent<NewGamePanelProps.IOwnProps> {
  public render() {
    return (
      <ContentPanel>
        <div>
          <div>Start new game?</div>
          <button onClick={this.props.onExitPanel}>
            Cancel
          </button>
        </div>
      </ContentPanel>
    );
  }
}
