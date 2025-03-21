/*
 * @lc app=leetcode.cn id=面试题 01.06 lang=javascript
 * @lcpr version=30100
 *
 * [面试题 01.06] 字符串压缩
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let last = S[0];
    let count = 1;
    let res = '';
    for (let i = 1; i < S.length; i++) {
        if (S[i] === last) {
            count++;
        }
        else {
            res += last + count;
            last = S[i];
            count = 1;
        }
    }

    res += last + count; 
    return res.length < S.length ? res : S;
};
// @lc code=end



/*
// @lcpr case=start
// "aabcccccaaa"\n
// @lcpr case=end

// @lcpr case=start
// "abbccd"\n
// @lcpr case=end

 */

