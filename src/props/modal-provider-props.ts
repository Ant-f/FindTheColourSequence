export default interface IModalProviderProps {
  hideModal: () => void;
  showModal: (modal: JSX.Element) => void;
}
