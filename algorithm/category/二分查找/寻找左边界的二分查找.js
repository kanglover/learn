/**
 * @file nums 数组中可能有重复元素，找出最左侧的 target
 */

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        // 防止两个数值过大造成溢出
        // const mid = left + Math.floor((left - right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            // nums[mid] <= target 收缩右侧边界
            right = mid - 1;
        }
    }

    if (left >= nums.length || nums[left] !== target) {
        return -1;
    }

    return left;
};


