function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value.toString());
}

export default getKeyByValue;
