import * as React from "react";
import PageProps from "../../props/how-to-play-page-props";
import HowToPlayContent from "./how-to-play-content";

export default class extends React.PureComponent<PageProps> {
  public render() {
    return (
      <HowToPlayContent
        currentPage={this.props.currentPage}
        heading="Introduction"
        itemPage={this.props.itemPage}>

        {/* tslint:disable:max-line-length */}

        <p>
          The objective of the game is to find the colours and their order within a particular sequence of colours. In each new game the colour sequence is different, and you only have a limited number of guesses.
        </p>

        <p>
          The game is over when either when your guess matches the colour sequence for that game (in which case you win!), or you run out of guesses. Whether you win or lose, the sequence will be revealed.
        </p>

        {/* tslint:enable:max-line-length */}

      </HowToPlayContent>
    );
  }
}
