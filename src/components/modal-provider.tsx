import * as React from "react";
import ModalProviderProps from "../props/modal-provider-props";
import { ContentHostContextTypes, IContentHostContext } from "./content-host";

export default <TProps extends {}>(
  BaseComponent: React.ComponentClass<TProps & ModalProviderProps>): React.ComponentClass => {

  type CombinedProps = TProps & ModalProviderProps;

  return class extends React.PureComponent<CombinedProps> {
    public static contextTypes = ContentHostContextTypes;

    public context: IContentHostContext;

    constructor(props: CombinedProps) {
      super(props);
    }

    public render(): JSX.Element {
      return (
        <BaseComponent
          {...this.props}
          hideModal={() => this.context.modalContentSetter(null) }
          showModal={ this.context.modalContentSetter } />
      );
    }
  };
};
