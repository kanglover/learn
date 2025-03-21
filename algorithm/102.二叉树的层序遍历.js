/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }

    const queue = [root];
    const res = [];

    while (queue.length) {
        const level = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue.shift();
            level.push(node);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
        res.push(level);
    }

    return res;
};

var levelOrder = function (root) {
    let res = [];
    const traversal = (root, depth) => {
        if (!root) {
            return;
        }

        traversal(root.left, depth + 1);
        (res[depth] || (res[depth] = [])).push(root.val);
        traversal(root.right, depth + 1);
    }
    traversal(root, 0);

    return res;
}
// @lc code=end

