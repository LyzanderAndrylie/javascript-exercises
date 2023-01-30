/**
 * Repeats the string a given number of times
 * @param {string} string 
 * @param {number} num 
 * @returns {string} repeated string.
 */
const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }

    let resultString = "";

    for (let i = 0; i < num; i++) {
        resultString += string;
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
