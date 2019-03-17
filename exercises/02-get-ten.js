/**
 * TODO: write a function getTen which has a loop with counter which starts from 0 and goes to 11, with delta 0.2.
 * when counter has value 10, loop brakes and function returns value 10.
 *
 * usage example
 * getTen();    // 10;
 * */

const getTen = () => {
  for (let i = 0; i < 11; i += 0.2) {
    if ( Math.round(i * 100) / 100 === 10) {
      return 10;
    }
  }
};


module.exports = getTen;
