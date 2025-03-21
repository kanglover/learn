/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const ans = [];
    const visited = [];
    const backtrack = (arr) => {
        if (arr.length === nums.length) {
            ans.push([...arr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited.includes(i) || (nums[i] === nums[i - 1] && !visited.includes(i - 1))) {
                continue;
            }

            arr.push(nums[i]);
            visited.push(i);
            backtrack(arr);
            arr.pop();
            visited.pop();
        }
    }

    backtrack([]);
    return ans;
};
// @lc code=end

