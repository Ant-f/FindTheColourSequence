import { Range } from "immutable";
import * as React from "react";
import ColourRow from "../containers/colour-row-container";
import ColourSelect from "../containers/colour-select-container";
import ContentRootProps from "../props/content-root-props";

export default class ContentRoot extends React.Component<ContentRootProps> {
  public render() {
    return (
      <div>
        {
          Range(0, this.props.totalRowCount).map((index) =>
            <ColourRow key={index.toString()} rowId={index}/>,
          )
        }
        <ColourSelect />
      </div>
    );
  }
}
