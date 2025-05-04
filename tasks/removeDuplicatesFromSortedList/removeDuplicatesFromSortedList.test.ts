import { deleteDuplicates, ListNode } from "./removeDuplicatesFromSortedList";

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

describe('Remove Duplicates from Sorted List', () => {
    it('should remove duplicates from [1,1,2]', () => {
        const input = buildList([1, 1, 2]);
        const result = deleteDuplicates(input);
        expect(listToArray(result)).toEqual([1, 2]);
    });

    it('should remove duplicates from [1,1,2,3,3]', () => {
        const input = buildList([1, 1, 2, 3, 3]);
        const result = deleteDuplicates(input);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    it('should handle empty list', () => {
        const input = buildList([]);
        const result = deleteDuplicates(input);
        expect(listToArray(result)).toEqual([]);
    });

    it('should handle list with no duplicates', () => {
        const input = buildList([1, 2, 3]);
        const result = deleteDuplicates(input);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    it('should handle list with all duplicates', () => {
        const input = buildList([1, 1, 1, 1]);
        const result = deleteDuplicates(input);
        expect(listToArray(result)).toEqual([1]);
    });
});
