import * as React from "react";
import * as buttons from "../../stylesheets/sass/buttons.scss";
import * as lettering from "../../stylesheets/sass/font-lettering.scss";
import classes from "../helpers/classes";
import ContentPanel from "./content-panel";

// Extract to separate module
interface IOwnProps {
  onExitPanel: () => void;
}

export default class extends React.PureComponent<IOwnProps> {
  constructor() {
    super();

    this.state = {
    };
  }

  public render() {
    return (
      <ContentPanel>
        <div className={classes(lettering.defaultText, lettering.titleBadge)}>
          How to Play: Coming Soon

          <button
            className={classes(buttons.boardButton, lettering.defaultText)}
            onClick={this.props.onExitPanel}>

            Cancel

          </button>
        </div>
      </ContentPanel>
    );
  }
}
