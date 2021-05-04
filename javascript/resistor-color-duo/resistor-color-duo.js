//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = (color) => {
  // take color names as input
  // output a two digit value even if input is more than two colors
  // ex. 'brown-green' returns 15, 'brown-green-violet' returns 15 also
  // get indexes of each color and concatenate
  let bands = "" + colors.indexOf(color[0]) + colors.indexOf(color[1]);
  return parseInt(bands);
};
