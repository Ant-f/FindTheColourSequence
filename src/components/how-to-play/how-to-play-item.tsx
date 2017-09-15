import * as React from "react";
import * as styles from "../../../stylesheets/sass/how-to-play.scss";
import Props from "../../props/how-to-play-item-props";

export default class extends React.PureComponent<Props> {
  public render() {
    return (
      <div className={styles.expand}>
        {
          this.props.heading
            ? <h2>
              {this.props.heading}
            </h2>
            : null
        }
        {
          this.props.children
        }
      </div>
    );
  }
}
