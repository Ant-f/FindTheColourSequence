import * as React from "react";
import * as styles from "../../stylesheets/sass/content-panel.scss";

export default class extends React.Component {
  public render() {
    return (
      <div className={styles.backgroundPanel}>
        <div className={styles.noiseOverlay}>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}
