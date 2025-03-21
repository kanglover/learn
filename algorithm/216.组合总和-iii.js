/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const ans = [];

    const backtrack = (arr, start, sum) => {
        if (sum === n && arr.length === k) {
            ans.push([...arr]);
            return;
        }

        if (sum > n && arr.length > k) {
            return;
        }

        for (let i = start; i <= 9; i++) {
            arr.push(i);
            sum += i;
            backtrack(arr, i + 1, sum);
            arr.pop();
            sum -= i;
        }
    }

    backtrack([], 1, 0);
    return ans;
};
// @lc code=end

