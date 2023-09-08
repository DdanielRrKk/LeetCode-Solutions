var isPalindrome = function(x) {
    let result = 0;
    let tempX = x;

    while(tempX > 0) {
        result *= 10;
        result += tempX % 10;
        tempX = Math.floor(tempX / 10);
    }

    return result === x;

    // let revercedNumber = x.toString().split('').reverse().join('');
    // return x == revercedNumber;

    // let digits = x.toString().split('');
    // for(let i = 0; i < digits.length; i++) {
    //     if(digits[i] != digits[digits.length - 1 - i]) {
    //         return false;
    //     }
    // }
    // return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(14));