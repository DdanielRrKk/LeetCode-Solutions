/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let center = Math.floor((left + right) / 2);

        if(target === nums[center]) return center;
        else if(target < nums[center]) right = center - 1;
        else left = center + 1;
    }
    return left;
};


console.log(searchInsert([1,3,5,6], 0));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 7));