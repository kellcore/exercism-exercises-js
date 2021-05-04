//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dateTime) => {
  // given a moment, determine the moment that would be after a gigasecond has passed
  // minute = 60 seconds
  // gigasecond = 1 billion seconds -> 1,000,000,000

  const gigaSecond = Math.pow(10, 9);
  return new Date(dateTime.getTime() + gigaSecond * 1000);
};
