/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    var arr = s.split(/\s/);
    return arr[arr.length - 1].length;
};

var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length;
};
// @lc code=end

