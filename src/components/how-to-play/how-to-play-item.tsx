import * as React from "react";
import * as styles from "../../../stylesheets/sass/how-to-play.scss";

export default class extends React.PureComponent {
  public render() {
    return (
      <div className={styles.expand}>
        {
          this.props.children
        }
      </div>
    );
  }
}
