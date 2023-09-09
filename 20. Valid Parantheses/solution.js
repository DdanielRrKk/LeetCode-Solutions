/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 == 1) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') { stack.push(s[i]); }
        else if(s[i] === ')' && stack.pop() !== '(') return false;
        else if(s[i] === '}' && stack.pop() !== '{') return false;
        else if(s[i] === ']' && stack.pop() !== '[') return false;
    }
    return stack.length === 0;


    // if(s.length % 2 == 1) return false;
    // let stack = '';
    // for (let i = 0; i < s.length; i++) {
    //     if(s[i] === '(' || s[i] === '{' || s[i] === '[') { stack += s[i]; continue; }
    //     else if(s[i] === ')' && stack[stack.length - 1] === '(') stack = stack.slice(0, -1);
    //     else if(s[i] === '}' && stack[stack.length - 1] === '{') stack = stack.slice(0, -1);
    //     else if(s[i] === ']' && stack[stack.length - 1] === '[') stack = stack.slice(0, -1);
    //     else return false;
    // }
    // return stack.length === 0;


    // let stack = [];
    // for (let i = 0; i < s.length; i++) {
    //     if(s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i]);
    //     else if(stack[stack.length - 1] === '(' && s[i] === ')') stack.pop();
    //     else if(stack[stack.length - 1] === '{' && s[i] === '}') stack.pop();
    //     else if(stack[stack.length - 1] === '[' && s[i] === ']') stack.pop();
    //     else return false;
    // }
    // return stack.length === 0;
};

console.time('stack');
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("("));
console.log(isValid("([])"));
console.log(isValid("){"));
console.timeEnd('stack');
