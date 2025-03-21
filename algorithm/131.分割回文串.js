/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalindrome = str => str.split('').reverse().join('') === str;

var dfs = (s, partition, result) => {
    if (s.length === 0) {
        result.push([...partition]);
        return;
    }

    for (let i = 1; i <= s.length; i++) {
        const prefix = s.substring(0, i);
        const postfix = s.substring(i);

        if (isPalindrome(prefix)) {
            partition.push(prefix);
            dfs(postfix, partition, result);
            partition.pop();
        }
    }
};

var partition = function (s) {
    var result = [];
    dfs(s, [], result);
    return result;
};


var partition = function(s) {
    const isPalindrome = str => str.split('').reverse().join('') === str;

    const res = [];
    const backtrack = (str, arr) => {
        if (str.length === 0) {
            res.push([...arr]);
            return;
        }

        // 注意这里 i 要等于 str.length
        for (let i = 1; i <= str.length; i++) {
            const prefix = str.substring(0, i);
            if (!isPalindrome(prefix)) {
                continue;
            }

            arr.push(prefix);
            backtrack(str.substring(i), arr);
            arr.pop();
        }
    }

    backtrack(s, []);
    return res;
};


var partition = function(s) {
    const isPalindrome = str => str.split('').reverse().join('') === str;
    const len = s.length;
    const res = [];
    const backtrack = (start, arr) => {
        if (start === len) {
            res.push([...arr]);
            return;
        }

        for (let i = start; i < len; i++) {
            const prefix = s.substring(start, i + 1);
            if (!isPalindrome(prefix)) {
                continue;
            }

            arr.push(prefix);
            backtrack(i + 1, arr);
            arr.pop();
        }
    }

    backtrack(0, []);
    return res;
};
// @lc code=end

