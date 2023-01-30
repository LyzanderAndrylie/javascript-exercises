/**
 * Removes the specified numbers from array.
 * @param {Array} array 
 * @param {...*} items
 * @returns {Array} new array.
 */
const removeFromArray = function(array, ...items) {
    return array.filter((element) => !items.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
