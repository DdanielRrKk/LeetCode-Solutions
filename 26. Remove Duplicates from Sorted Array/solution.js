/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1) return 1;
    let endIndex = nums.length - 1;
    for (let i = nums.length - 1; i > 0; i--) {
        if(nums[i] !== nums[i - 1]) {
            nums.splice(i, endIndex - i);
            endIndex = i - 1;
        }
    }
    if(endIndex !== 0) nums.splice(0, endIndex);
    return nums.length;

    
    // if(nums.length === 1) return 1;
    // let countForSplice = 0;
    // for (let i = nums.length - 1; i > 0; i--) {
    //     if(nums[i] !== nums[i - 1]) {
    //         nums.splice(i, countForSplice);
    //         countForSplice = 0;
    //     }
    //     else if(nums[i] === nums[i - 1]) countForSplice++;
    // }
    // if(countForSplice > 0) nums.splice(0, countForSplice);
    // return nums.length;


    // if(nums.length === 1) return 1;
    // for (let i = 0; i < nums.length - 1; i++) {
    //     if(nums[i] === nums[i + 1]) {
    //         nums.splice(i, 1);
    //         i--;
    //     }
    // }
    // return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1]));