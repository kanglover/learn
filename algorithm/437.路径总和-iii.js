/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) {
        return 0;
    }

    return dfs(root, targetSum, 0) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};

var dfs = function (node, targetSum, sum) {
    var res = 0;

    if (!node) {
        return 0;
    }

    sum += node.val;

    if (sum === targetSum) {
        res++;
    }

    res += dfs(node.left, targetSum, sum);
    res += dfs(node.right, targetSum, sum);

    return res;
};
// @lc code=end

