/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    /*
        Runtime: 51ms (Beats 64.44%)
        Memory: 42.14 MB (Beats 83.52%)
    */
    let index1 = m - 1, index2 = n - 1, indexNew = m + n - 1;

    while (index2 >= 0) {
        if(index1 >= 0 && nums1[index1] > nums2[index2]) {
            nums1[indexNew] = nums1[index1];
            indexNew--;
            index1--;
        }
        else {
            nums1[indexNew] = nums2[index2];
            indexNew--;
            index2--;
        }
    }
};