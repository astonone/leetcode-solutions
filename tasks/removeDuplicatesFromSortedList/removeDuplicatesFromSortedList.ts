// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    if (head.next === null) return head;

    let current: ListNode | null = head;
    let prevUniq: ListNode | null = head;

    current = current.next;
    while (current !== null) {
        if (prevUniq.val === current.val) {
            const nextNode = current.next;
            prevUniq!.next = nextNode;
            current = current.next;
        } else {
            prevUniq = current;
        }

    }

    return head;
}
