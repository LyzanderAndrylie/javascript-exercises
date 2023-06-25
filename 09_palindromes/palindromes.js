const palindromes = function (text) {
    const filteredText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverseText = filteredText.split('').reverse().join('');
    return filteredText === reverseText;
};

// Do not edit below this line
module.exports = palindromes;
