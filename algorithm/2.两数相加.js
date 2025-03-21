/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let i = 0;
    const ans = [];
    let flag = false;
    let sum = 0;
    while (i < l1.length || i < l2.length) {
        if (i < l1.length) {
            sum += l1[i];
        }

        if (i < l2.length) {
            sum += l2[i];
        }

        if (sum >= 10) {
            ans.push(sum - 10);
            flag = true;
        }
        else {
            ans.push(sum);
        }

        if (flag) {
            sum = 1;
            flag = false;
        }
        else {
            sum = 0;
        }

        i++;
    }

    if (flag) {
        ans.push(1);
    }

    return ans;
};
// @lc code=end

