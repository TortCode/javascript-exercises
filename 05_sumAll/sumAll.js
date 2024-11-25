const sumAll = function(start, stop) {
    if (!Number.isInteger(start) || !Number.isInteger(stop) || start < 0 || stop < 0) {
        return 'ERROR';
    }
    if (start > stop) {
        [start, stop] = [stop, start];
    }
    return (start + stop) * (stop - start + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
