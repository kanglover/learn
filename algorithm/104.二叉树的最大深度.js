/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0;
    let res = 0;
    // 遍历二叉树
    function traverse(root) {
        if (root === null) {
            return;
        }

        // 前序遍历位置
        depth++;
        // 遍历的过程中记录最大深度
        res = Math.max(res, depth);
        traverse(root.left);
        traverse(root.right);
        // 后序遍历位置
        depth--;
    }
    traverse(root);
    return res;
};

var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);
    // 根据左右子树的最大深度推出原二叉树的最大深度
    return 1 + Math.max(leftMax, rightMax);
}
// @lc code=end

