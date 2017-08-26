import * as React from "react";
import * as context from "../context/content-host-context";
import ModalProviderProps from "../props/modal-provider-props";

export default <TProps extends {}>(
  BaseComponent: React.ComponentClass<TProps & ModalProviderProps>): React.ComponentClass<TProps> => {

  type CombinedProps = TProps & ModalProviderProps;

  return class extends React.PureComponent<CombinedProps> {
    public static contextTypes = context.ContentHostContextTypes;

    public context: context.IContentHostContext;

    constructor(props: CombinedProps) {
      super(props);
    }

    public render(): JSX.Element {
      return (
        <BaseComponent
          {...this.props}
          showModal={ this.context.modalContentSetter } />
      );
    }
  };
};
