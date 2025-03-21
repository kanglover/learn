/**
 * @see https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let sum = 0;
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (i < k - 1) {
            continue;
        }

        if (sum / k >= threshold) {
            res++;
        }
        sum -= arr[i - k + 1];
    }

    return res;
};