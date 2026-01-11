import { reverseList, ListNode } from './reverseLinkedList';

describe('reverseList', () => {
  test('should reverse list [1,2,3,4,5]', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const reversed = reverseList(head);
    expect(reversed?.val).toBe(5);
    expect(reversed?.next?.val).toBe(4);
    expect(reversed?.next?.next?.val).toBe(3);
    expect(reversed?.next?.next?.next?.val).toBe(2);
    expect(reversed?.next?.next?.next?.next?.val).toBe(1);
    expect(reversed?.next?.next?.next?.next?.next).toBeNull();
  });

  test('should reverse list [1,2]', () => {
    const head = new ListNode(1, new ListNode(2));
    const reversed = reverseList(head);
    expect(reversed?.val).toBe(2);
    expect(reversed?.next?.val).toBe(1);
    expect(reversed?.next?.next).toBeNull();
  });

  test('should handle empty list', () => {
    const reversed = reverseList(null);
    expect(reversed).toBeNull();
  });
});
