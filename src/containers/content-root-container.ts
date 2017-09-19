import { connect } from "react-redux";
import ContentRoot from "../components/content-root";
import AppState from "../model/app-state";
import IProps from "../props/content-root-props";

const boardHeights: { [key: number]: number } = {
  [4]: 29,
  [5]: 35,
  [6]: 39,
  [7]: 45,
  [8]: 49,
};

const mapStateToProps = (state: AppState): IProps => {
  const height = `${boardHeights[state.sequenceColourCount]}em`;
  const props = {
    boardHeight: height,
  };
  return props;
};

export default connect<IProps, null, null>(
  mapStateToProps,
  null,
)(ContentRoot);
