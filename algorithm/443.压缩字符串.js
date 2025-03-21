/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    let j = 0;
    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];
        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        chars[i++] = curr;
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit;
            }
        }
    }
    return i;
};

var compress = function(chars) {
    const len = chars.length;
    let left = 0;
    let write = 0;
    for (let i = 0; i < len; i++) {
        if (i === len - 1 || chars[i] !== chars[i + 1]) {
            chars[write++] = chars[i];

            const count = i - left + 1;
            if (count > 1) {
                for (let digit of count.toString()) {
                    chars[write++] = digit;
                }
            }

            left = i + 1;
        }
    }
    return write;
}

// @lc code=end

