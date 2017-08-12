import * as PropTypes from "prop-types";
import * as React from "react";

export interface IContentHostContext {
  modalContentSetter: (content: JSX.Element) => void;
}

export const ContentHostContextTypes = {
  modalContentSetter: PropTypes.func,
};

interface IContentHostState {
  modalContent: JSX.Element;
}

export default class ContentHost extends React.Component<null, IContentHostState> {
  public static childContextTypes = ContentHostContextTypes;

  public componentWillMount() {
    this.setState({});
  }

  public getChildContext(): IContentHostContext {
    return {
      modalContentSetter: (content: JSX.Element): void => {
        this.setState({ modalContent: content });
      },
    };
  }

  public render() {
    return (
      <div>
        {
          <div style={this.state.modalContent ? { filter: "blur(2.5px)" } : null}>
            {
              this.props.children
            }
          </div>
        }
        {
          this.state.modalContent ?
            <div>
              <div style={{
                background: "black",
                height: "100%",
                left: "0",
                opacity: 0.5,
                position: "fixed",
                top: "0",
                width: "100%",
              }} />

              <div style={{
                left: "50%",
                position: "fixed",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}>
                {this.state.modalContent}
              </div>
            </div> :
            null
        }
      </div>
    );
  }
}
