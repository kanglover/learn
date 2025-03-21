/**
 * @see https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let left = -1, right = 0;
    let ans = 0;
    let n = s.length;
    let cnt = [];
    const aCharCode = 'a'.charCodeAt();
    while (right < n) {
        const rightIndex = s[right].charCodeAt() - aCharCode;
        cnt[rightIndex] = (cnt[rightIndex] || 0) + 1;

        while (cnt[0] && cnt[1] && cnt[2]) {
            // 以 [left, right] 字符串为前缀的所有组合，即 right 后有多少字母可以组合
            ans += n - right;
            left++;
            cnt[s[left].charCodeAt() - aCharCode]--;
        }

        right++;
    }
    return ans;
};