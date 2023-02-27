const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    let n1 = 0;
    let n2 = 1;
    for (i = 1; i <= n; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    }
    return n1;
};
// take input of fibonacci number position
// keep adding fibonacci sequence until position comes
    // add last two numbers together to get next number
// 1, 1, 2, 3, 5, 8, 13
// 1, 2, 3, 4,
    // Do not edit below this line
module.exports = fibonacci;
