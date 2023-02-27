const findTheOldest = function(a) {
const oldest = a.sort(function(a, b) {
    var currentTime = new Date()
    var year = currentTime.getFullYear()
    a.yearOfDeath ??= year;
    b.yearOfDeath ??= year;
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
});
return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
