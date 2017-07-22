import * as React from "react";
import ColourRow from "../containers/colour-row-container";
import ContentRootProps from "../props/content-root-props";
import { Range } from "immutable";

export default class ContentRoot extends React.Component<ContentRootProps> {
  render() {
    return (
      <div>
        {
          Range(0, this.props.totalRowCount).map(index =>
            <ColourRow key={index.toString()} rowId={index}/>
          )
        }
      </div>
    );
  }
}
