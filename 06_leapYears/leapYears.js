/**
 * Determines whether or not a given year is a leap year.
 * @param {number} year 
 */
const leapYears = function(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
