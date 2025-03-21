/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    if (!fast) {
        // 奇数个节点，slow指向后移动一个位置
        slow = slow.next;
    }

    let rightHead = reverse(slow);
    let leftHead = head;

    while (leftHead && rightHead) {
        if (leftHead.val !== rightHead.val) {
            return false;
        }
        leftHead = leftHead.next;
        rightHead = rightHead.next;
    }

    return true;
};

var reverse = (head) => {
    let prev = null;
    let cur = head;

    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};
// @lc code=end

