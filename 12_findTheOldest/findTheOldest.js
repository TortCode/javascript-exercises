const findTheOldest = function(persons) {
    const calculateAge = function(person) {
        const startYear = person.yearOfBirth;
        const endYear = person.yearOfDeath ?? new Date().getFullYear();
        const age = endYear - startYear; 
        return age;
    }
    return persons.reduce((acc, person) => {
        if (calculateAge(person) > calculateAge(acc)) {
            return person;
        } else {
            return acc;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
