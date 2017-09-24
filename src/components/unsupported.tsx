import * as React from "react";
import * as styles from "../../stylesheets/sass/font-lettering.scss";

export default class extends React.PureComponent {
  public render() {
    return (
      <div className={styles.altText}>
        <div>
          Sorry, it looks like your browser can’t show this page properly.
        </div>

        <div>
          Please try another browser; Chrome, Edge, and Firefox all work well.
        </div>
      </div>
    );
  }
}
