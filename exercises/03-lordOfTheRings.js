/**
 * TODO: write a function lordOfTheRings which takes string as argument and checks how many rings contains string
 *  every character 'dbpeaAoOgPDqRQ' has one ring
 *  'B' has two rings;
 *
 * usage example
 * lordOfTheRings('One Does Not Simply Walk into Mordor');    // 12;
 * */

const lordOfTheRings = (str) => {
  let ones = 'dbpeaAoOgPDqRQ';
  const splitted = str.split('');
  return (
    (splitted.filter((char) => ones.indexOf(char) > -1) || []).length +
    (splitted.filter((char) => char === 'B') || []).length * 2
  );
};


module.exports = lordOfTheRings;
