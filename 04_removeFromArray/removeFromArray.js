const removeFromArray = function(arr, ...elements) {
    return arr.filter((item) => elements.indexOf(item) === -1);
};

// Do not edit below this line
module.exports = removeFromArray;
