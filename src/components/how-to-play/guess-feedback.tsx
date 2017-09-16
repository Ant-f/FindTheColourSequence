import * as React from "react";
import PageProps from "../../props/how-to-play-page-props";
import HowToPlayContent from "./how-to-play-content";

export default class extends React.PureComponent<PageProps> {
  public render() {
    return (
      <HowToPlayContent
        currentPage={this.props.currentPage}
        heading="Feedback"
        itemPage={this.props.itemPage}>

        {/* tslint:disable:max-line-length */}

        <p>
          To help you out, you will be given feedback on each guess to show how accurate the guess was.
        </p>

        {/* tslint:enable:max-line-length */}

      </HowToPlayContent>
    );
  }
}
