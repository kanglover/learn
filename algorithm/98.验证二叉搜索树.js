/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validate(root, -Infinity, Infinity);
};

var validate = function (node, lower, upper) {
    if (node === null) {
        return false;
    }

    if (node.value > lower && node.value < upper) {
        return validate(node.left, lower, node.value) && validate(node.right, node.value, upper);
    }
    return false;
}
// @lc code=end

