import * as React from "react";
import SequenceAttempt from "../components/sequence-attempt";
import ColourSelect from "../containers/colour-select-container";
import ContentRootProps from "../props/content-root-props";

export default class ContentRoot extends React.Component<ContentRootProps> {
  public render() {
    return (
      <div>
        {
          this.props.data.map((d, listIndex) =>
            <SequenceAttempt
              attemptId={listIndex}
              colours={d.input}
              key={listIndex}>
            </SequenceAttempt>,
          )
        }
        <ColourSelect />
      </div>
    );
  }
}
