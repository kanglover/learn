/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!k || !head || !head.next) {
        return head;
    }

    let count = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next;
        count++;
    }

    let i = count - k % count;
    if (i === count) {
        return head;
    }

    // 形成环形链表
    cur.next = head;

    while (i !== 0) {
        cur = cur.next;
        i--;
    }

    let res = cur.next;
    cur.next = null;
    return res;
};
// @lc code=end

