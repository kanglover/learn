/**
 * @file 求 x 的平方根
 */

var mySqrt = function (x) {
    let left = 0;
    let right = x;
    let ans = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid <= x) {
            left = mid + 1;
            ans = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return ans;
};


var mySqrt = function (x) {
    let left = 0;
    let right = Math.floor(x / 2) + 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid < x) {
            left = mid + 1;
        }
        else if (mid * mid > x) {
            right = mid - 1;
        }
        else {
            return mid;
        }
    }
    return right;
};
