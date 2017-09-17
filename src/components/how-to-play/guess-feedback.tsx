import * as React from "react";
import { sequenceSegmentsMap } from "../../../stylesheets/classname-maps";
import * as segmentStyles from "../../../stylesheets/sass/sequence-segments.scss";
import classes from "../../helpers/classes";
import { Colour } from "../../model/colour";
import PageProps from "../../props/how-to-play-page-props";
import HowToPlayContent from "./how-to-play-content";

export default class extends React.PureComponent<PageProps> {
  public render() {
    return (
      <HowToPlayContent
        currentPage={this.props.currentPage}
        heading="Guess Feedback"
        itemPage={this.props.itemPage}>

        {/* tslint:disable:max-line-length */}

        <p>
          To help you out, you will be given feedback after each guess to show how accurate it was. For each colour in your guess, the following colours show that it:
        </p>

        <table>
          <tbody>

            <tr>
              <td>
                <div
                  className={classes(
                    segmentStyles.small,
                    sequenceSegmentsMap.get(Colour.Black))}>
                </div>
              </td>
              <td>
                Is in the sequence, and is also in the right place
            </td>
            </tr>

            <tr>
              <td>
                <div
                  className={classes(
                    segmentStyles.small,
                    sequenceSegmentsMap.get(Colour.White))}>
                </div>
              </td>
              <td>
                Is in the sequence, but is not in the right place
              </td>
            </tr>

            <tr>
              <td>
                <div
                  className={classes(
                    segmentStyles.small,
                    sequenceSegmentsMap.get(Colour.None))}>
                </div>
              </td>
              <td>
                Is not in the sequence
              </td>
            </tr>

          </tbody>
        </table>

        <p>
          The order of colours in the feedback does not correspond to the order of colours in your guess.
        </p>

        {/* tslint:enable:max-line-length */}

      </HowToPlayContent>
    );
  }
}
