/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const need = new Map();
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    const windows = new Map();
    const len = s.length;

    let left = 0, right = 0;
    let valid = 0;
    let minlen = Infinity;
    let start = 0;
    while (right < len) {
        const c = s[right];
        right++;

        if (need.has(c)) {
            windows.set(c, (windows.get(c) || 0) + 1);

            if (windows.get(c) === need.get(c)) {
                valid++;
            }
        }


        while (valid === need.size) {
            if (minlen > right - left) {
                minlen = right - left;
                start = left;
            }

            let d = s[left];
            left++;

            if (need.has(d)) {
                if (windows.get(d) === need.get(d)) {
                    valid--;
                }

                windows.set(d, windows.get(d) - 1);
            }
        }
    }

    return minlen === Infinity ? '' : s.substr(start, minlen);
};
// @lc code=end

