import * as React from "react";
import PageProps from "../../props/how-to-play-page-props";
import HowToPlayContent from "./how-to-play-content";

export default class extends React.PureComponent<PageProps> {
  public render() {
    return (
      <HowToPlayContent
        currentPage={this.props.currentPage}
        itemPage={this.props.itemPage}>

        {/* tslint:disable:max-line-length */}

        <p>
          The colour sequence to guess can contain any of the colours that you see displayed at the bottom of the game board, and each colour might be used more than once (this is optional when starting a new game).
        </p>

        {/* tslint:enable:max-line-length */}

      </HowToPlayContent>
    );
  }
}
