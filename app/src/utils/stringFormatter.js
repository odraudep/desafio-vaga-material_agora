export const toPropercase = (str) => str.split(' ')
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');

export const checkForArrayToStr = (value) => (typeof value !== 'string' ? value.join(', ') : value);
