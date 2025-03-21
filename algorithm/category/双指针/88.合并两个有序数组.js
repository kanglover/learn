var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let tail = m + n - 1;
    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[tail--] = nums1[p1--];
        }
        else {
            nums1[tail--] = nums2[p2--];
        }
    }
};