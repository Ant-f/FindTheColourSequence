import { fromJS } from "immutable";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import ContentRoot from "../components/content-root";
import AppState from "../model/app-state";
import { Colour } from "../model/colour";
import ContentRootProps from "../props/content-root-props";

const mapStateToProps = (state: AppState) => {
  return {
    totalRowCount: state.totalRowCount,
  } as ContentRootProps;
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
  return {
  };
};

export default connect<ContentRootProps, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(ContentRoot);
