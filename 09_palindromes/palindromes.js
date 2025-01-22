const palindromes = function (s) {
    const chars = s.toLowerCase().split('').filter(c => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'));
    return chars.join('') === chars.toReversed().join('');
};

// Do not edit below this line
module.exports = palindromes;
