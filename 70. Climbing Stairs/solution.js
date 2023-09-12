/**
 * @param {number} x
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1) return 1;
    let num1 = 1;
    let num2 = 1;
    let num3 = 0;
    for (let i = 2; i <= n; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3;
};


console.log('climbStairs(1): ', climbStairs(1));
console.log('climbStairs(2): ', climbStairs(2));
console.log('climbStairs(3): ', climbStairs(3));
console.log('climbStairs(10): ', climbStairs(10));