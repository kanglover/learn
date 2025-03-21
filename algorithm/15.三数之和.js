/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const ans = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length  - 2; i++) {
        if (nums[i] > 0) {
            break;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;

                while (j < k && nums[j] === nums[j + 1]) {
                    j++;
                }

                while (j < k && nums[k] === nums[k - 1]) {
                    k--;
                }

            }
            else if (sum < 0) {
                j++;
            }
            else {
                k--;
            }
        }
    }

    return ans;
};
// @lc code=end

