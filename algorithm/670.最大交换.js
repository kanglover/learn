/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    const numArr = [...num.toString()].map(Number);
    const maxIndexs = [];
    const len = numArr.length;
    let maxIndex = len - 1;

    for (let i = len - 1; i >= 0; i--) {
        if (numArr[i] > numArr[maxIndex]) {
            maxIndex = i;
        }
        maxIndexs[i] = maxIndex;
    }

    for (let i = 0; i < len; i++) {
        const swapIdx = maxIndexs[i];
        if (i !== swapIdx && numArr[i] !== numArr[swapIdx]) {
            [numArr[i], numArr[swapIdx]] = [numArr[swapIdx], numArr[i]]; // swap
            break;
        }
    }
    return +numArr.join('');
};
// @lc code=end
