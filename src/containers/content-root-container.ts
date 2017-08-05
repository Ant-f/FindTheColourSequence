import { connect, Dispatch } from "react-redux";
import ContentRoot from "../components/content-root";
import AppState from "../model/app-state";
import ContentRootProps from "../props/content-root-props";

const mapStateToProps = (state: AppState) => {
  return {
    gameState: state.gameState,
  } as ContentRootProps;
};

export default connect<ContentRootProps, null, null>(
  mapStateToProps,
  null,
)(ContentRoot);
