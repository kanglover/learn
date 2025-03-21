/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height == null || height.length === 0) return 0;

    let res = 0;
    let l = height.length;
    let lMax = {};
    let rMax = {};

    lMax[0] = height[0];
    for (let i = 1; i < l; i++) {
        lMax[i] = Math.max(height[i], lMax[i - 1]);
    }

    rMax[l - 1] = height[l - 1];
    for (let i = l - 2; i >= 0; i--) {
        rMax[i] = Math.max(height[i], rMax[i + 1]);
    }

    for (let i = 0; i < height.length; i++) {
        res += Math.min(lMax[i], rMax[i]) - height[i];
    }

    return res;
};

var trap = function (height) {
    let res = 0;
    for (let i = 1; i < height.length - 1; i++) {
        let leftMax = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftMax = Math.max(height[j], leftMax);
        }

        let rightMax = 0;
        for (let j = i + 1; j < height.length; j++) {
            rightMax = Math.max(height[j], rightMax);
        }

        let min = Math.min(leftMax, rightMax);
        res += min - height[i];
    }
}

var trap = function (height) {
    let leftMax = {}, rightMax = {};

    leftMax[0] = height[0];
    for (let i = 1; i < height.length - 1; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }

    rightMax[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }

    let res = 0;
    for (let i = 1; i < height.length - 1; i++) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return res;
}

var trap = function (height) {
    let left = 0; right = height.length - 1;
    let left_max = 0, right_max = 0;
    let res = 0;

    while (left <= right) {
        left_max = Math.max(left_max, height[left]);
        right_max = Math.max(right_max, height[right]);

        if (left_max < right_max) {
            res += left_max - height[left];
            left++;
        }
        else {
            res += right_max - height[right];
            right--;
        }
    }
    return res;
}
// @lc code=end
