// eslint-disable-next-line no-unused-vars
const getRundomInt = (one, two) => {
  if (isNaN(Number(one)) || isNaN(Number(two))) {
    throw 'Param is not Number';
  }
  if (one < 0 || two < 0) {
    throw 'Input number must be positive.';
  }
  if (one > two) {
    const tmpOne = one;
    one = two;
    two = tmpOne;
  }
  one = Math.ceil(one);
  two = Math.floor(two);
  return Math.floor(Math.random() * (two - one + 1)) + one;
};

// eslint-disable-next-line no-unused-vars
const checkLengthString = (inputString, maxlength) => {
  if (inputString.length <= maxlength) {
    return true;
  }
  return false;
};


