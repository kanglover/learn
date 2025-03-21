/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    const nums = candidates.sort((a, b) => a - b);

    const backtrack = (arr, remain, start) => {
        if (remain === 0) {
            res.push([...arr]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            if (remain - nums[i] < 0) {
                continue;
            }
            arr.push(nums[i]);
            backtrack(arr, remain - nums[i], i);
            arr.pop();
        }
    }

    backtrack([], target, 0);
    return res;
};
// @lc code=end


var combinationSum = function(candidates, target) {
    const ans = [];

    const backtrack = (start, arr, sum) => {
        if (sum === target) {
            ans.push([...arr]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (target - sum < candidates[i]) {
                continue;
            }

            arr.push(candidates[i]);
            sum += candidates[i];
            // 可以选重复的元素，所以这里传 i
            backtrack(i, arr, sum);
            arr.pop();
            sum -= candidates[i];
        }
    }
    backtrack(0, [], 0)
    return ans;
}