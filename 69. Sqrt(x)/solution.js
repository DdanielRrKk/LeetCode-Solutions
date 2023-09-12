/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    /*
        Runtime: 66ms (Beats 58.50%)
        Memory: 42.7 MB (Beats 95.29%)
    */
    return Math.floor(x ** 0.5);


    /*
        Runtime: 86ms (Beats 24.34%)
        Memory: 43.8 MB (Beats 40.67%)
    */
    // let count = 0;
    // while (count * count <= x) count++;
    // return count - 1;
};


console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(0));