import * as PropTypes from "prop-types";
import * as React from "react";
import * as styles from "../../stylesheets/sass/page-background.scss";

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
            <div className={styles.modalHost}>
              {this.state.modalContent}
            </div>
            : null
        }
      </div>
    );
  }
}
