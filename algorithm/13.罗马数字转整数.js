/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        if (map[s[i + 1]] > map[s[i]]) {
            sum -= map[s[i]];
        }
        else {
            sum += map[s[i]];
        }
    }

    return sum;
};
// @lc code=end

