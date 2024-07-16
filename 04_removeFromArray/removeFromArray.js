const removeFromArray = function(array, valueToRemove) {
    let index = array.indexOf(valueToRemove);
    return array.slice(0, index).concat(array.slice(index+1));
};

// Do not edit below this line
module.exports = removeFromArray;
