const findTheOldest = function(people) {

    const sortByAge = people.sort((a, b) => {
        if (typeof a.yearOfDeath === 'undefined') a.yearOfDeath = new Date().getFullYear();
        if (typeof b.yearOfDeath === 'undefined') b.yearOfDeath = new Date().getFullYear();
        return (a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth) ? -1: 1;
    })

    return sortByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
