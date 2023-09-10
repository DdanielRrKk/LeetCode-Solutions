/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        if(needle[0] === haystack[i] && haystack.substr(i, needle.length) === needle) return i;
    }
    return -1;


    // if(haystack.length === 1) return haystack === needle ? 0 : -1;
    // for(let i = 0; i < haystack.length; i++) {
    //     if(needle[0] === haystack[i]) {
    //         if(haystack.substr(i, needle.length) === needle) return i;
    //     }
    // }
    // return -1;
};
