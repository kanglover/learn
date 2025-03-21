/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] > nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[i] >= nums[j]) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    reverse(nums, i + 1, nums.length - 1);
};

function reverse(nums, start, end) {
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// 1,2,3 => 1,3,2
var nextPermutation = function(nums) {
    let i = nums.length - 1;
    while (i >= 0) {
        if (nums[i] < nums[i + 1]) {
            break;
        }
        i--;
    }

    for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] >= nums[i]) {
            swap(i, j);
            reverse(nums, i + 1);
            break;
        }
    }

    reverse(0);

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function reverse(idx) {
        let start = idx, end = nums.length - 1;

        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
}

// 1,2,3,1
// 1,3,2,1
// 1,3,1,2
var nextPermutation = function(nums) {
    for (let i = nums.length; i >= 0; i--) {
        // 先找到一个小的值，与后面最大的值交换
        if (nums[i] < nums[i + 1]) {
            // 找到后面更大的值
            let j = nextLarge(i);
            // 交换
            swap(i, j);
            // 需要保证最大的数后面都是升序（从小到大排），只需要将后面的数字所有都倒序就行了
            reverse(i + 1);
            return;
        }
    }
    // 如果没有发生变化，说明数组是逆序，这个时候倒序就行
    reverse(0);

    function nextLarge(idx) {
        for (let i = nums.length - 1; i > idx; i--) {
            if (nums[i] > nums[idx]) {
                return i;
            }
        }
    }

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function reverse(start) {
        let end = nums.length - 1;
        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
};


// @lc code=end

