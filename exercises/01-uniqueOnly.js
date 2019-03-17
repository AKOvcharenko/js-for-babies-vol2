/**
 * TODO: write a function uniqueOnly which takes array of primitives and filter all not unique values from the array.
 *
 * usage example
 * uniqueOnly([1, 2, 4, 2, 5, 2, 4, 3, 6]);    // [1, 2, 4, 5, 3, 6];
 * uniqueOnly(['a', 'b', 'c', 'a', 'b', 'c']); // ['a', 'b', 'c'];
 * */

const uniqueOnly = (arr) => {
  return arr.filter((el, index) => {
    return arr.indexOf(el) === index;
  });
};


module.exports = uniqueOnly;
