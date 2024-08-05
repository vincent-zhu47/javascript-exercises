const findTheOldest = function(people) {
    let currentYear = 2024;
    
    return people.reduce((oldest, curr) => {
        let oldestDeath;
        let currDeath;
        if (oldest.yearOfDeath === undefined) {
            oldestDeath = currentYear;
        } else {
            oldestDeath = oldest.yearOfDeath;
        }
        if (curr.yearOfDeath === undefined) {
            currDeath = currentYear;
        } else {
            currDeath = curr.yearOfDeath;
        }

        let oldestAge = oldestDeath - oldest.yearOfBirth;
        let currAge = currDeath - curr.yearOfBirth;

        return oldestAge > currAge ? oldest : curr;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
