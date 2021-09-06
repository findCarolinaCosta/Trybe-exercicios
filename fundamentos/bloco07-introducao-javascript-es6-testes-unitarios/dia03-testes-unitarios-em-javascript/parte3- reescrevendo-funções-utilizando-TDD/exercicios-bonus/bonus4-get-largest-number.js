const getLargestNumber = (array) => {
  let largestNumber = array.slice().sort((a, b) => b - a);
  return largestNumber[0];
}

module.exports = getLargestNumber;