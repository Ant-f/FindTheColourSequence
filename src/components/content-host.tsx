import * as React from "react";
import { version } from "../../package.json";
import * as fontStyles from "../../stylesheets/sass/font-lettering.scss";
import * as pageStyles from "../../stylesheets/sass/page-background.scss";
import * as context from "../context/content-host-context";
import classes from "../helpers/classes";

interface IContentHostState {
  modalContent: JSX.Element;
}

export default class ContentHost extends React.Component<null, IContentHostState> {
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
      <div className={pageStyles.pageBackground}>
        {
          <div className={showModalContent ? pageStyles.blurContent : null}>
            {
              this.props.children
            }
          </div>
        }
        <a
          className={classes(fontStyles.altText, pageStyles.moreInfoLink)}
          href={"https://github.com/Ant-f/FindTheColourSequence"}>

          Copyright © 2017 Anthony Fung

        </a>
        <span className={classes(fontStyles.altText, pageStyles.versionLabel)}>
          {
            `version ${version}`
          }
        </span>
        {
          showModalContent ?
            <div
              className={pageStyles.modalHost}
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
