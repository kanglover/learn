/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestStr = '';
    let maxLengthStr = '';
    for (let i = 0; i < s.length; i++) {
        const s1 = palindrome(s, i, i);
        const s2 = palindrome(s, i, i + 1);
        maxLengthStr = s1.length > s2.length ? s1 : s2;
        longestStr = longestStr.length < maxLengthStr.length ? maxLengthStr : longestStr;
    }
    return longestStr;
};

var palindrome = function(s, l, r) {
    while (l >= 0 && r <= s.length && s[l] === s[r]) {
        l++;
        r--;
    }
    return s.substring(l + 1, r);
}

// dp[i, j] = dp[i + 1][j - 1] + s[i] === s[j];
var longestPalindrome = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
    let maxLen = 0;
    let start = 0;
    let end = 0;

    for (let i = n - 1; i >= 0; i++) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j]) {
                if (j - i < 2) {
                    dp[i][j] = true;
                }
                else if (dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                }
            }

            if (dp[i][j]) {
                if (j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                    start = i;
                    end = j;
                }
            }
        }
    }

    return s.substr(start, end - start + 1);
}
// @lc code=end

