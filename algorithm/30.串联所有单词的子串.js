/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const n = words.length;
    const len = words[0].length;
    const allLen = n * len;

    const helper = (i) => {
        const allStr = s.substr(i, allLen);
        const map = {};
        for (const word of words) {
            map[word] = (map[word] || 0) + 1;
        }

        for (let i = 0; i < allLen; i += len) {
            const subStr = allStr.substr(i, len);

            if (!map[subStr]) {
                return false;
            }

            map[subStr] -= 1;
        }

        return true;
    };

    const res = [];
    for (let i = 0; i <= s.length - allLen; i++) {
        const str = s.substr(i, len);

        if (!words.includes(str)) {
            continue;
        }

        if (helper(i)) {
            res.push(i);
        }
    }

    return res;
};


// @lc code=end

