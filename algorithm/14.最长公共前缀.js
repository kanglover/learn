/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a, b) => a.length - b.length);
    var prefix = strs[0];
    var i = 1;
    while (i < strs.length) {
        if (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            i = 1;
        }
        else {
            i++;
        }
    }
    return prefix;
};
// @lc code=end

console.log(longestCommonPrefix(["reflower","flow","flight"]))