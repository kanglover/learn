/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > stack[temperatures[stack[stack.length - 1]]]) {
            const temp = stack.pop();
            res[temp] = i - temp;
        }
        stack.push(i);
    }
    return res;
};


var dailyTemperatures = function(temperatures) {
    const ans = new Array(temperatures.length).fill(0);

    const arr = [];
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (arr.length && temperatures[i] >= temperatures[arr[arr.length - 1]]) {
            arr.pop();
        }

        arr.length && (ans[i] = arr[arr.length - 1] - i);
        arr.push(i);
    }

    return ans;
}

// @lc code=end

