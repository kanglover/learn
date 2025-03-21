/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }

    if (lists.length === 1) {
        return lists[0];
    }

    if (lists.length === 2) {
        return mergeTwoLists(lists[0], lists[1]);
    }

    const mid = lists.length / 2;
    const l1 = [];
    for (let i = 0; i < mid; i++) {
        l1.push(lists[i]);
    }

    const l2 = [];
    for (let i = mid; i < lists.length; i++) {
        l2.push(lists[i]);
    }

    return mergeTwoLists(mergeKLists(l1), mergeKLists(l2));
};
// @lc code=end

