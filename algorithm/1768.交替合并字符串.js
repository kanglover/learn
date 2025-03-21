/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = '';
    let i = 0;
    while (i < word1.length || i < word2.length) {
        if (i < word1.length) {
            res += word1[i];
        }

        if (j < word2.length) {
            res += word2[i];
        }
        i++;
    }
};
// @lc code=end

