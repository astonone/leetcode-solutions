// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    let head: ListNode | null = null;
    let destinationListCurrent: ListNode | null = null;
    let list1Current: ListNode | null = list1;
    let list2Current: ListNode | null = list2;

    if (list1Current.val < list2Current.val) {
        head = new ListNode(list1Current.val);
        list1Current = list1Current.next;
    } else {
        head = new ListNode(list2Current.val);
        list2Current = list2Current.next;
    }

    destinationListCurrent = head;

    while (list1Current !== null || list2Current !== null) {
        if (list1Current !== null && list2Current !== null) {
            if (list1Current.val < list2Current.val) {
                destinationListCurrent.next = new ListNode(list1Current.val);
                list1Current = list1Current.next;
            } else {
                destinationListCurrent.next = new ListNode(list2Current.val);
                list2Current = list2Current.next;
            }
            destinationListCurrent = destinationListCurrent.next;
        } else if (list1Current === null && list2Current !== null) {
            destinationListCurrent.next = new ListNode(list2Current.val);
            list2Current = list2Current.next;
            destinationListCurrent = destinationListCurrent.next;
        } else if (list2Current === null && list1Current !== null) {
            destinationListCurrent.next = new ListNode(list1Current.val);
            list1Current = list1Current.next;
            destinationListCurrent = destinationListCurrent.next;
        }
    }

    return head;
}
