import { connect, Dispatch } from "react-redux";
import SequenceAttempt from "../components/sequence-attempt";
import AppState from "../model/app-state";
import { IOwnProps } from "../props/sequence-attempt-props";

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
  return {
  };
};

export default connect<null, any, IOwnProps>(
  null,
  mapDispatchToProps,
)(SequenceAttempt);
