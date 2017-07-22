import * as React from "react";
import AppState from "../model/app-state";
import ContentRoot from "../components/content-root";
import ContentRootProps from "../props/content-root-props";
import { Colour } from "../model/colour";
import { connect, Dispatch } from "react-redux";
import { fromJS } from "immutable";

const mapStateToProps = (state: AppState) => {
  return <ContentRootProps> {
    totalRowCount: state.totalRowCount
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
  return {
  };
};

export default connect<ContentRootProps, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(ContentRoot);
