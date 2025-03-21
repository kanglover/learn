/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let sum = 0;
    for (let i = 0; i <= flowerbed.length; i++) {
        if (i < flowerbed.length && flowerbed[i] === 0) {
            sum++;
            i === 0 && sum++;
            i === flowerbed.length - 1 && sum++;
        }
        else {
            n -= Math.trunc((sum - 1) / 2);
            if (n <= 0) {
                return true;
            }
            sum = 0;
        }
    }
    return false;
};
// @lc code=end


console.log(canPlaceFlowers([0], 1));