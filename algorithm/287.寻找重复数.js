/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    slow = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};

var findDuplicate = function(nums) {
    let slow = 0, fast = 0;

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    let check = 0;
    while (true) {
        check = nums[check];
        slow = nums[slow];
        if (slow === check) {
            return check;
        }
    }
}
// @lc code=end

