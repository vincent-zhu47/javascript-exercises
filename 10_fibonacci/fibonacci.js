const fibonacci = function(index) {
    let curr = 1;
    let prev = 0;

    if (Number(index) === 0) {
        return prev;
    }
    if (index < 0) {
        return "OOPS";
    }

    for (let i = 1; i < index; i++) {
        let temp = curr;
        curr+=prev;
        prev = temp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
