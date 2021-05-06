//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const isPangram = (sentence) => {

  sentence = sentence.toLowerCase();

  // every() method tests whether all elements in an array pass the test implemented by the provided function -> returns a boolean value

  // includes() method performs a case-sensitive search to determine whether one string may be found within another string and returns true or false as appropriate

  return letters.every(letter => sentence.includes(letter));
};
