var removeDuplicates = function(nums) {
    var i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            // 下个位置替换成不重复的数
            nums[++i] = nums[j];
        }
    }
    return ++i;
}

var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    let slow = 1, fast = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};