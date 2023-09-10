/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) {
        if(nums[0] === val) nums.pop();
        return nums.length;
    }

    let endIndex = -1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] !== val && endIndex !== -1) {
            nums.splice(i + 1, endIndex - i);
            endIndex = -1;
        }
        else if(nums[i] === val && endIndex === -1) endIndex = i;
    }
    if(endIndex !== -1) nums.splice(0, endIndex + 1);

    return nums.length;


    // if(nums.length === 0) return 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if(nums[i] === val) {
    //         nums.splice(i, 1);
    //         i--;
    //     }
    // }
    // return nums.length;
};


console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
console.log(removeElement([2,2,2], 2));
console.log(removeElement([2], 2));
console.log(removeElement([3,3,2,2,3], 3));