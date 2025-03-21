/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let ans = [];
    const letterMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    const backtrack = (arr, start) => {
        if (arr.length === digits.length) {
            ans.push(arr.join(''));
            return;
        }

        const digit = digits[start];
        for (let letter of letterMap[digit]) {
            arr.push(letter);
            backtrack(arr, start + 1);
            arr.pop();
        }
    };
    backtrack([], 0);
    return ans;
};
// @lc code=end

