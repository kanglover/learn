/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
            continue;
        }

        let char = stack.pop();
        let str = '';
        while (char !== '[') {
            str = char + str;
            char = stack.pop();
        }

        let digit = '';
        while (!isNaN(+stack[stack.length - 1])) {
            digit = stack.pop() + digit;
        }

        stack.push(str.repeat(+digit));
    }

    return stack.join('');
};
// @lc code=end

