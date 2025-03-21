/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }

    const bucket = [];
    Object.keys(map).forEach(num => {
        if (!bucket[map[num]]) {
            bucket[map[num]] = [];
        }
        bucket[map[num]].push(num);
    });

    const ans = [];
    for(let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) {
            ans.push(...bucket[i]);
        }

        if (ans.length === k) {
            break;
        }
    }

    return ans;
};
// @lc code=end

