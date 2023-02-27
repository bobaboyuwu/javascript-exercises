const sumAll = function(start, finish) {
    if (start > finish) {
        let temp;
        temp = start;
        start = finish;
        finish = temp;
    }
    if (start < 0 || finish < 0) return "ERROR";
    if (typeof finish != 'number' || typeof start != 'number') {
     return "ERROR"
   };
    let sum = 0;
    for (let i = start; i <= finish; i++) {
      sum += i;
    }
    return sum;
};

// start at first number
// go to next number, add to previous result
// go on until final number is reached

// Do not edit below this line
module.exports = sumAll;
