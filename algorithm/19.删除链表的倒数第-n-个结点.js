/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(-1);
    dummy.next = head;

    const x = findFromEnd(head, n + 1);
    x.next = x.next.next;
    return dummy.next;
};

var findFromEnd = function (head, n) {
    // 快慢指针
    let p1 = head;
    for (let i = 0; i < n; i++) {
        p1 = p1.next;
    }

    let p2 = head;
    while (p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2;
}

var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if (!fast) {
        return head.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
// @lc code=end

