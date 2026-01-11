/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    if (head.next === null) {
        return head;
    }
    let prev, curr, next : ListNode | null = null;
    prev = null;
    curr = head;
    next = head.next;
    while (next !== null) {
        curr.next = prev;
        prev = curr;
        curr = next
        next = curr.next;
    }
    curr.next = prev;
    return curr;
};
