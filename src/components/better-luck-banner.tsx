import * as React from "react";
import * as lettering from "../../stylesheets/sass/font-lettering.scss";
import classes from "../helpers/classes";

export default class extends React.PureComponent {

  public render() {
    return (
      <div className={classes(lettering.gameOverTextContainer, lettering.titleBadge)}>
        <span className={lettering.winText}>Better Luck</span>
        <span className={lettering.winText}>Next Time...</span>
        <span>(Click to Continue)</span>
      </div>
    );
  }
}
