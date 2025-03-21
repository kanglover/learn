/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let ans = '';

    // for (let i = 0; num; i++) {
    //     while (num >= val[i]) {
    //         ans += rom[i];
    //         num -= val[i];
    //     }
    // }

    let i = 0;
    while (num) {
        if (num >= val[i]) {
            ans += rom[i];
            num -= val[i];
        }
        else {
            i++;
        }
    }
    return ans
};
// @lc code=end
