/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var left = 1, right = x;
    var ans = 0;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (mid * mid <= x){
            left = mid + 1;
            ans = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return ans;
};
// @lc code=end

