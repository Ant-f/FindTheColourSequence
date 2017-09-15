import * as React from "react";
import * as styles from "../../../stylesheets/sass/how-to-play.scss";

export default class extends React.PureComponent {
  public render() {
    return (
      <div className={styles.expand}>
        <h2>
          Introduction
        </h2>

        {/* tslint:disable:max-line-length */}

        <p>
          The objective of the game is to find the colours and their order within a particular sequence of colours. In each new game the colour sequence is different, and you only have a limited number of guesses.
        </p>

        <p>
          To help you out, you will be given feedback on each guess to show how accurate the guess was.
        </p>

        <p>
          The game is over when either when your guess matches the colour sequence for that game (in which case you win!), or you run out of guesses. Whether you win or lose, the sequence will be revealed.
        </p>

        {/* tslint:enable:max-line-length */}
      </div>
    );
  }
}
