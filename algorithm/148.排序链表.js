/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next)
        return head;

    let slow = head;
    // 奇数个节点时，快指针指向中间节点
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // way two
    // slow = head, fast = head;
    // while (fast.next && fast.next.next)

    let mid = slow.next;
    slow.next = null;

    let l1 = sortList(head);
    let l2 = sortList(mid);

    return mergeTwoLists(l1, l2);
};
// @lc code=end

