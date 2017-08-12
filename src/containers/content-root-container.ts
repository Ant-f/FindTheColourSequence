import { connect } from "react-redux";
import ContentRoot from "../components/content-root";
import AppState from "../model/app-state";
import ContentRootProps from "../props/content-root-props";
import ModalProviderProps from "../props/modal-provider-props";

const mapStateToProps = (state: AppState) => {
  return {
    data: state.attemptData,
    isGameLost: state.isGameLost,
    isGameWon: state.isGameWon,
  } as ContentRootProps;
};

export default connect<ContentRootProps, null, ModalProviderProps>(
  mapStateToProps,
  null,
)(ContentRoot);
