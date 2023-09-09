/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];

    let prefix = '';

    for (let i = 0; i < strs[0].length; i++) {
        let letter = strs[0][i];
        let flag = strs.every((value) => value[i] === letter);
        if(flag) prefix += letter;
        else break;
    }

    return prefix;
    
    // if(strs.length === 1) return strs[0];
    
    // let prefix = '';
    // let strIndex = 0, prefixIndex = 0;    

    // while (prefixIndex !== strs[0].length) {
    //     let currentStr = strs[strIndex];
    //     strIndex++;
    //     let nextStr = strs[strIndex];

    //     console.log('currentStr', currentStr);
    //     console.log('nextStr', nextStr);

    //     if(currentStr === '' || nextStr === '' ) break;
    //     if(currentStr[prefixIndex] != nextStr[prefixIndex]) break;
        
    //     if(strIndex === strs.length - 1) {
    //         prefix += currentStr[prefixIndex];
    //         prefixIndex++;
    //         strIndex = 0;
    //     }
    // }

    // return prefix;



    // let firstStr = strs[0];
    // if (firstStr.length === 0) return '';
    
    // let prefix = '';
    // let isPrefixCorrect = true;

    // for (let i = 0; i < firstStr.length; i++) {
    //     let tempPrefix = firstStr[i];
    
    //     for (let j = 1; j < strs.length; j++) {
    //         let nextStr = strs[j];
    
    //         if(tempPrefix !== nextStr[i]) {
    //             isPrefixCorrect = false;
    //             break;
    //         }
    //     }

    //     if(isPrefixCorrect) prefix += tempPrefix;
    //     else break;
    // }

    // return prefix;
};

console.time('prefix');
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.timeEnd('prefix');

console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["",""]));
console.log(longestCommonPrefix([""]));