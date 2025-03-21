/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    // 中心扩散
    const n = s.length;
    let ans = 0;
    for (let i = 0; i < 2 * n - 1; ++i) {
        // r = i + 1 或者 r = i。所以这里取模
        let l = i / 2, r = i / 2 + i % 2;
        while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
            --l;
            ++r;
            ++ans;
        }
    }
    return ans;
};
// @lc code=end

