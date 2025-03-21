/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let rootIndex = postorder.length - 1;
    const inorderMap = new Map();
    inorder.forEach((item, idx) => {
        inorderMap.set(item, idx);
    });

    const build = (in_left, in_right) => {
        if (in_left > in_right) {
            return null;
        }

        const rootVal = postorder[rootIndex];
        const root = new TreeNode(rootVal);
        rootIndex--;

        const index = inorderMap.get(rootVal);
        root.right = build(index + 1, in_right);
        root.left = build(in_left, index - 1);
        return root;
    }

    return build(0, inorder.length - 1);
};

var buildTree = function(inorder, postorder) {
    const inorderMap = new Map();
    inorder.forEach((item, idx) => {
        inorderMap.set(item, idx);
    });

    const build = (in_left, in_right, post_left, post_right) => {
        if (in_left > in_right) {
            return null;
        }

        const rootVal = postorder[post_right];
        const root = new TreeNode(rootVal);

        const index = inorderMap.get(rootVal);
        // 左子树的长度
        const leftSize = index - in_left;

        root.left = build(in_left, index - 1, post_left, post_left + leftSize - 1);
        root.right = build(index + 1, in_right, post_left + leftSize, post_right - 1);
        return root;
    }

    return build(0, inorder.length - 1, 0, postorder.length - 1);
};

// @lc code=end

