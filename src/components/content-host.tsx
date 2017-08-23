import * as React from "react";
import * as styles from "../../stylesheets/sass/page-background.scss";
import * as context from "../context/content-host-context";
import ModalProviderProps from "../props/modal-provider-props";

interface IContentHostState {
  modalContent: JSX.Element;
}

export default class ContentHost extends React.Component<ModalProviderProps, IContentHostState> {
  public static childContextTypes = context.ContentHostContextTypes;

  public componentWillMount() {
    this.setState({});
  }

  public getChildContext(): context.IContentHostContext {
    return {
      modalContentSetter: (content: JSX.Element): void => {
        this.setState({ modalContent: content });
      },
    };
  }

  public render() {
    const showModalContent = this.state.modalContent;
    return (
      <div className={styles.pageBackground}>
        {
          <div className={showModalContent ? styles.blurContent : null}>
            {
              this.props.children
            }
          </div>
        }
        {
          showModalContent ?
            <div
              className={styles.modalHost}
              onClick={() => {
                this.setState({ modalContent: null });
              }}>

              {this.state.modalContent}

            </div>
            : null
        }
      </div>
    );
  }
}
