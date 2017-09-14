import * as React from "react";
import * as buttons from "../../../stylesheets/sass/buttons.scss";
import * as panel from "../../../stylesheets/sass/content-panel.scss";
import * as lettering from "../../../stylesheets/sass/font-lettering.scss";
import * as styles from "../../../stylesheets/sass/how-to-play.scss";
import classes from "../../helpers/classes";
import { IOwnProps } from "../../props/how-to-play-panel-props";
import ContentPanel from "../content-panel";
import Introduction from "./introduction";

export default class extends React.PureComponent<IOwnProps> {
  public render() {
    return (
      <ContentPanel>
        <div className={classes(lettering.defaultText, styles.mainContainer)}>
          <h1>
            How to Play
          </h1>

          <Introduction />

          <div className={panel.boardFooter}>
            <button
              className={classes(buttons.boardButton, lettering.defaultText)}
              onClick={this.props.onExitPanel}>

              Back to Game

            </button>
          </div>
        </div>
      </ContentPanel>
    );
  }
}
