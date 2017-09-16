import * as React from "react";
import * as styles from "../../../stylesheets/sass/how-to-play.scss";
import ColourSelect from "../../containers/colour-select-container";
import PageProps from "../../props/how-to-play-page-props";
import HowToPlayContent from "./how-to-play-content";

export default class extends React.PureComponent<PageProps> {
  public render() {
    return (
      <HowToPlayContent
        currentPage={this.props.currentPage}
        heading="Making Guesses"
        itemPage={this.props.itemPage}>

        {/* tslint:disable:max-line-length */}

        <p>
          Press any of the colour buttons at the bottom of the game board to add them to your guess.
        </p>

        <div className={styles.centredContent}>
          <ColourSelect />
        </div>

        <p>
          If you change your mind after adding a colour, press it where it was added. The next time you use the buttons at the bottom of the game board, the colour you choose will replace the colour at the selected position. When you are ready to guess with that colour sequence, press ‘Check’.
        </p>

        {/* tslint:enable:max-line-length */}

      </HowToPlayContent>
    );
  }
}
