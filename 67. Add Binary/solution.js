/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = '';

    if(a.length > b.length) {
        while (a.length !== b.length) b = `0${b}`;
    }
    else if (a.length < b.length) {
        while (a.length !== b.length) a = `0${a}`;
    }

    let floatingOne = false;
    for (let i = a.length - 1; i >= 0; i--) {
        if(a[i] !== b[i]) {
            result = floatingOne ? `0${result}` : `1${result}`;
        }
        else {
            result = floatingOne ? `1${result}` : `0${result}`;
            floatingOne = a[i] === '1';
        }
    }

    return floatingOne ? `1${result}` : result;


    // let result = '';

    // if(a.length > b.length) {
    //     while (a.length !== b.length) b = `0${b}`;
    // }
    // else if (a.length < b.length) {
    //     while (a.length !== b.length) a = `0${a}`;
    // }

    // console.log("a: ", a);
    // console.log("b: ", b);

    // let floatingOne = false;
    // for (let i = a.length - 1; i >= 0; i--) {
    //     if(a[i] === '1' && b[i] === '1') {
    //         result = floatingOne ? `1${result}` : `0${result}`;
    //         floatingOne = true;
    //     }
    //     else if(a[i] === '1' || b[i] === '1') {
    //         result = floatingOne ? `0${result}` : `1${result}`;
    //     }
    //     else {
    //         result = floatingOne ? `1${result}` : `0${result}`;
    //         floatingOne = false;
    //     }
    // }

    // return floatingOne ? `1${result}` : result;
};


console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("1111", "1"));
console.log(addBinary("100", "110010"));
