import * as React from "react";
import * as styles from "../../../stylesheets/sass/how-to-play.scss";
import classes from "../../helpers/classes";
import ContentProps from "../../props/how-to-play-content-props";
import PageProps from "../../props/how-to-play-page-props";

type CombinedProps = ContentProps & PageProps;

export default class extends React.PureComponent<CombinedProps> {
  public render() {
    return (
      <div className={classes(
        styles.helpItem,
        this.props.itemPage === this.props.currentPage
          ? styles.currentPage
          : this.props.itemPage > this.props.currentPage
            ? styles.upcomingPage
            : styles.pastPage)}>
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
