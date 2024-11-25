const removeFromArray = function(arr, ...args) {
    args = [...args]
    return arr.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
