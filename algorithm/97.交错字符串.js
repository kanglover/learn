/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    // dp[i][j] = (dp[i - 1][j] && s3[i + j - 1] === s1[i - 1])
    //     || (dp[i][j - 1] && s3[i + j - 1] === s2[j - 1]);

    const m = s1.length, n = s2.length;
    if (m + n !== s3.length) {
        return false;
    }

    if (!m) {
        return s3 === s2;
    }

    if (!n) {
        return s3 === s1;
    }

    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));
    dp[0][0] = true;

    for(let i = 1; i <= m; i++){
        dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1];
    }

    for(let j = 1; j <= n; j++){
        dp[0][j] = dp[0][j - 1] && s2[j - 1] == s3[j - 1];
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let p = i + j - 1;
            dp[i][j] = (dp[i - 1][j] && s3[p] === s1[i - 1])
                || (dp[i][j - 1] && s3[p] === s2[j - 1]);
        }
    }

    return dp[m][n];
};
// @lc code=end

