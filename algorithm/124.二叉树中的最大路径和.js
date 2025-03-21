/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
    let max = -Infinity;

	const findSums = (node) => {
		if (!node) return 0;

		let left = findSums(node.left),
			right = findSums(node.right),
			allSum = left + right + node.val,
			leftNodeSum = left + node.val,
			rightNodeSum = right + node.val;

		max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum);

		return Math.max(leftNodeSum, rightNodeSum, node.val);
	};

	findSums(root);

	return max;
};
// @lc code=end

