/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    const gcd = (a, b) => {
        let remainder = a % b;
        while (remainder !== 0) {
            a = b;
            b = remainder;
            remainder = a % b;
        }
        return b;
    };

    return str1.substring(0, gcd(str1.length, str2.length));
};
// @lc code=end

