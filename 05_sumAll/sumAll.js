/**
 * Returns the sum of every number between them (inclusive).
 * @param {number} start
 * @param {number} end
 */
const sumAll = function(start, end) {
    if (!Number.isInteger(start)
        || !Number.isInteger(end) 
        || start < 0 
        || end < 0) {
        return "ERROR";
    }

    // Swap between start and end
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
