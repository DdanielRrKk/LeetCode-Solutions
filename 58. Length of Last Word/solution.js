/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = s.trimEnd();
    return str.length - str.lastIndexOf(' ') - 1;


    // let count = 0;
    // for (let i = s.length - 1; i >= 0; i--) {
    //     if(s[i] !== ' ') count++;
    //     else if(s[i] === ' ' && count !== 0) return count;
    // }
    // return count;


    // let str = s.trimEnd();
    // let index = str.lastIndexOf(' ');
    // return str.substring(index + 1).length;
};


console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord(" "));
console.log(lengthOfLastWord("abc"));