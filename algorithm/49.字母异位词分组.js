/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const encode = (str) => {
        const arr = []
        for (let c of str) {
            const d = c.charCodeAt() - 'a'.charCodeAt();
            arr[d] = (arr[d] || 0) + 1;
        }
        return arr.toString();
    }

    const map = new Map();

    for (const str of strs) {
        const codeStr = encode(str);
        if (!map.has(codeStr)) {
            map.set(codeStr, []);
        }
        map.get(codeStr).push(str);
    }

    const res = [];
    for (const val of map.values()) {
        res.push(val);
    }
};
// @lc code=end

