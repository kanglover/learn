/**
 * @see https://leetcode.cn/problems/maximum-length-substring-with-two-occurrences/description/
 */

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    const map = {};
    let left = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        while (map[char] === 2) {
            map[s[left]]--;
            left++;
        }
        map[char] = (map[char] || 0) + 1;
        max = Math.max(max, i - left + 1);
    }
    return max;
};