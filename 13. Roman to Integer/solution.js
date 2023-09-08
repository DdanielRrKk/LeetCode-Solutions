/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let letters = s.split('');
    let result = 0;

    let prevLetter = '';
    for (let i = letters.length - 1; i >= 0; i--) {
        switch(letters[i]) {
            case 'I': result += 1; break;
            case 'V': result += 5; break;
            case 'X': result += 10; break;
            case 'L': result += 50; break;
            case 'C': result += 100; break;
            case 'D': result += 500; break;
            case 'M': result += 1000; break;
            default: break;
        }
        if(letters[i] + prevLetter === 'IV' || letters[i] + prevLetter === 'IX') result -= 2;
        if(letters[i] + prevLetter === 'XL' || letters[i] + prevLetter === 'XC') result -= 20;
        if(letters[i] + prevLetter === 'CD' || letters[i] + prevLetter === 'CM') result -= 200;
        prevLetter = letters[i];
    }

    return result;

    // console.time('rome');
    // let letters = s.split('');
    // let result = 0;

    // let values = {
    //     'I': 1,
    //     'V': 5,
    //     'X': 10,
    //     'L': 50,
    //     'C': 100,
    //     'D': 500,
    //     'M': 1000
    // };

    // for (let i = 0; i < letters.length; i++) {
    //     const current = values[letters[i]];
    //     const next = values[letters[i + 1]];
        
    //     if(current < next) { result += (next - current); i++ }
    //     else result += current;
    // }

    // console.timeEnd('rome');
    // return result;
};

console.time('rome');
console.log(romanToInt('IV'));
console.timeEnd('rome');

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
