/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    traverse(root);

    return root;
};

function traverse(root) {
    if (root === null) {
        return;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    traverse(root.left);
    traverse(root.right);
}

var invertTree = function(root) {
    if (!root) {
        return root;
    }

    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right
    root.right = left;
    return root;
}
// @lc code=end

