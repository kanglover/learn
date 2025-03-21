/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const res = [];
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            str += s[i];
        }
        else {
            str && res.unshift(str);
            str = '';
        }
    }

    str && res.unshift(str);
    return res.join(' ');
};
// @lc code=end

