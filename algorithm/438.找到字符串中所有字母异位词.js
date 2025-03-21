/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const need = [];

    for (let c of p) {
        need[c] = (need[c] || 0) + 1;
    }

    const windows = [];
    let left = 0, right = 0;
    let valid = 0;
    let res = [];
    while (right < s.length) {
        const c = s[right];
        right++;

        if (need[c]) {
            windows[right] = (windows[right] || 0) + 1;

            if (window[c] === need[c]) {
                valid++;
            }
        }

        while (right - left >= p.length) {
            if (valid === need.length) {
                res.push(left);
            }

            const d = s[left];
            left++;

            if (need[d]) {
                if (windows[d] === need[d]) {
                    valid--;
                }

                windows[d] -= 1;
            }
        }
    }

    return res;
};
// @lc code=end

