/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let index = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        while (!set.has(s[index]) && index < s.length) {
            set.add(s[index]);
            index++;
        }
        set.delete(s[i]);

        max = Math.max(max, index - i);
    }
    return max;
};

var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let left = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            // 注意这里是从左边开始删除
            set.delete(s[left]);
            left++;
        }

        set.add(s[i]);
        max = Math.max(max, i - left + 1);
    }
    return max;
}
// @lc code=end