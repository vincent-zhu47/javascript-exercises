const palindromes = function (string) {
    return string.replace(/[^0-9A-Z]+/gi, "").toLowerCase() === string.replace(/[^0-9A-Z]+/gi, "").split("").reverse().join("").toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
