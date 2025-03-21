/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let len = s.length;
    let start = 0;
    let max = -Infinity;
    for (let i = 0; i < len; i++) {
        if (i === len - 1 || s[i] !== s[i + 1]) {
            let count = i - start + 1;
            start = i + 1;
            max = Math.max(max, count);
        }
    }
    return max;
};
// @lc code=end

