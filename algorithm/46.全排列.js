/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const backtrack = (arr) => {
        if (arr.length === nums.length) {
            return res.push([...arr]);
        }

        for (let i = 0; i < nums.length; i++) {
            if (arr.includes(nums[i])) {
                continue;
            }

            arr.push(nums[i]);
            backtrack(arr);
            arr.pop();
        }
    }
    backtrack([])
    return res;
};
// @lc code=end

