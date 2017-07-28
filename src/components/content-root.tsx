import * as React from "react";
import ColourSelect from "../containers/colour-select-container";
import SequenceAttempt from "../containers/sequence-attempt-container";
import ContentRootProps from "../props/content-root-props";

export default class ContentRoot extends React.Component<ContentRootProps> {
  public render() {
    return (
      <div>
        {
          this.props.gameState.map((colours, listIndex) =>
            <SequenceAttempt colours={colours} id={listIndex} key={listIndex}/>,
          )
        }
        <ColourSelect />
      </div>
    );
  }
}
