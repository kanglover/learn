/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var str = x.toString();
    var left = 0; right = str.length - 1;

    while(left <= right) {
        if (str[left] !== str[right]) {
            return false;
        }
        if (str[left] === str[right]) {
            left++;
            right--;
        }
    }

    return true;
};

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var sum = 0;
    var num = x;
    while (num !== 0) {
        var remainder = num % 10;
        sum = sum * 10 + remainder;
        num = Math.floor(num / 10);
    }
    return sum === x;
}
// @lc code=end

