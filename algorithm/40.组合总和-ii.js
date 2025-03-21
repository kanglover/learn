/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const ans = [];

    candidates = candidates.sort((a, b) => a - b);

    const backtrack = (arr, start, sum) => {
        if (sum === target) {
            ans.push([...arr]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (sum + candidates[i] > target) {
                continue;
            }

            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            arr.push(candidates[i]);
            sum += candidates[i];
            backtrack(arr, i + 1, sum);
            arr.pop();
            sum -= candidates[i];
        }
    }

    backtrack([], 0, 0);
    return ans;
};
// @lc code=end

