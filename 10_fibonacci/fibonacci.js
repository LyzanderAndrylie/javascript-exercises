const fibonacci = function(num) {
  const number = Number(num);

  if (Number.isNaN(number) || number < 0) {
    return 'OOPS';
  }

  if (number === 0) {
    return number;
  }

  let prevFib = 0;
  let currentFib = 1;

  for (let i = 0; i < number - 1; i++) {
    [prevFib, currentFib] = [currentFib, prevFib+currentFib];
  }

  return currentFib;
};

// Do not edit below this line
module.exports = fibonacci;
