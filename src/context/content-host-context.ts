import * as PropTypes from "prop-types";

export interface IContentHostContext {
  modalContentSetter: (content: JSX.Element) => void;
}

export const ContentHostContextTypes = {
  modalContentSetter: PropTypes.func,
};
