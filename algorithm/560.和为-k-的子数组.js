/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);

    for (let num of nums) {
        sum += num;

        // sum - (sum - k) = k;
        // sum - k 的次数即 count
        if (map.get(sum - k)) {
            count += map.get(sum - k);
        }
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        }
        else {
            map.set(sum, 1);
        }
    }

    return count;
};

var subarraySum = function (nums, k) {
    const hashMap = {};
    let count = 0, sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === k) {
            count++;
        }

        if (hashMap[sum - k]) {
            count += hashMap[sum - k];
        }

        if (!hashMap[sum]) {
            hashMap[sum] = 1;
        }
        else {
            hashMap[sum] += 1;
        }
    }
    return count;
}
// @lc code=end

