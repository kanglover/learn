/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = {};
    for (const char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    for (const item of t) {
        if (!map[item]) {
            return false;
        }

        map[item] = map[item] - 1;
    }
    return true;
};
// @lc code=end

