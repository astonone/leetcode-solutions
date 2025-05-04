import { mergeTwoLists, ListNode } from "./mergeTwoSortedLists";

function buildList(values: number[]): ListNode | null {
    if (values.length === 0) return null;
    const head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
}

function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

describe('Merge Two Sorted Lists', () => {
    it('should merge [1,2,4] and [1,3,4]', () => {
        const l1 = buildList([1, 2, 4]);
        const l2 = buildList([1, 3, 4]);
        const result = mergeTwoLists(l1, l2);
        expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4]);
    });

    it('should merge [] and []', () => {
        const l1 = buildList([]);
        const l2 = buildList([]);
        const result = mergeTwoLists(l1, l2);
        expect(listToArray(result)).toEqual([]);
    });

    it('should merge [] and [0]', () => {
        const l1 = buildList([]);
        const l2 = buildList([0]);
        const result = mergeTwoLists(l1, l2);
        expect(listToArray(result)).toEqual([0]);
    });

    it('should merge [-9,3] and [5,7]', () => {
        const l1 = buildList([-9,3]);
        const l2 = buildList([5,7]);
        const result = mergeTwoLists(l1, l2);
        expect(listToArray(result)).toEqual([-9,3,5,7]);
    });
});
