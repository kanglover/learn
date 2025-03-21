/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (!nums.length) {
        return null;
    }

    let maxValue = nums[0];
    let index = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (maxValue < nums[i]) {
            maxValue = nums[i];
            index = i;
        }
    }

    const tree = new TreeNode(maxValue);
    tree.left = constructMaximumBinaryTree(nums.slice(0, index));
    tree.right = constructMaximumBinaryTree(nums.slice(index));
    return tree;
};
// @lc code=end

