export default (...classNames: string[]): string => {
  const joined = classNames.join(" ");
  return joined;
};
