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
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return false;
    if (head.next === null) return true;
    const valArr = [];
    let current: ListNode | null = head;
    while (current) {
        valArr.push(current.val);
        current = current.next;
    }
    const reversedArr = [];
    for (let i = valArr.length - 1; i >= 0; i--) {
        reversedArr.push(valArr[i]);
    }
    for (let i = 0; i < valArr.length; i++) {
        if (valArr[i] !== reversedArr[i]) {
            return false;
        }
    }
    return true;
};
