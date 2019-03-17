/**
 * TODO: Write a function missingNumber that takes a shuffled array of unique numbers from 1 to n
 * with one element missing (which can be any number including n). Return this missing number.
 *
 * usage example
 * missingNumber([1, 3, 4]) => 2
 * missingNumber([1, 2, 3]) => 4
 * missingNumber([4, 2, 3]) => 1
 * */

const missingNumber = (array) => {
  const sorted = array.sort((a, b) => a > b ? 1 : -1);
  const missed = sorted.reduce((result, curr, index) => {
    if(result) return result;
    return index + 1 === curr ? result : index + 1;
  }, 0);

  return missed || array.length + 1;
};


module.exports = missingNumber;
