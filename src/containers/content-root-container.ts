import { connect } from "react-redux";
import ContentRoot from "../components/content-root";
import AppState from "../model/app-state";
import ContentRootProps from "../props/content-root-props";

const mapStateToProps = (state: AppState) => {
  return {
    data: state.attemptData,
  } as ContentRootProps;
};

export default connect<ContentRootProps, null, null>(
  mapStateToProps,
  null,
)(ContentRoot);
