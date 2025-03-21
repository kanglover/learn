/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
    if (!head) return head;

    let a = head, b = head;

    for (let i = 0; i < k; i++) {
        if (b === null) return head;

        b = b.next;
    }

    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead;
};

const reverse = (a, b) => {
    let prev = null;
    let cur = a;
    while (cur !== b) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
// @lc code=end

