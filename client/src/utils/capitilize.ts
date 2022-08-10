const capitalizeText = (val: string) => {
  if (!val) return "";
  return val.charAt(0).toUpperCase() + val.slice(1);
};

export default capitalizeText;
