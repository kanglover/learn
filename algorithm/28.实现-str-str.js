/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) {
        return 0;
    }

    if (needle.length > haystack.length) {
        return -1;
    }

    var resultIndex = -1;
    var first = true;

    var needleIndex = 0;
    var haystackIndex = 0;
    while (needleIndex < needle.length && haystackIndex < haystack.length) {
        if (haystack[haystackIndex] !== needle[needleIndex]) {
            // 匹配过一次
            if (first === false) {
                haystackIndex = resultIndex + 1;
                resultIndex = -1;
                needleIndex = 0;
                first = true;
            }
            // 没有匹配过
            else {
                haystackIndex++;
            }
        }
        else {
            first && (resultIndex = haystackIndex);
            first = false;
            needleIndex++;
            haystackIndex++;
        }
    }
    // 说明最后都没有匹配完
    if (needleIndex !== needle.length) {
        return -1;
    }
    return resultIndex;
};

var strStr = function (haystack, needle) {
    if (!needle) {
        return 0;
    }

    if (needle.length > haystack.length) {
        return -1;
    }

    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            for (var j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    break;
                }

                if (j === needle.length - 1) {
                    return i;
                }
            }
        }
    }
    return -1;
};

// @lc code=end

strStr('mississippi', 'issip');