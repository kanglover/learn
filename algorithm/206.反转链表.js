/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    let cur = head;
    let prev = null;
    while(cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};

var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    const res = reverseList(head.next);
    // 反转，后节点指向前节点
    head.next.next = head;
    head.next = null;
    return res;
};
// @lc code=end

