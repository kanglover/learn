var removeDuplicates = function (nums) {
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2] || nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};