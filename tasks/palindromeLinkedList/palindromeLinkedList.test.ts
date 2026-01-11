import { isPalindrome, ListNode } from './palindromeLinkedList';

describe('isPalindrome', () => {
  test('should return true for [1,2,2,1]', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
    expect(isPalindrome(head)).toBe(true);
  });

  test('should return false for [1,2]', () => {
    const head = new ListNode(1, new ListNode(2));
    expect(isPalindrome(head)).toBe(false);
  });

  test('should return false for [1,1,2,1]', () => {
    const head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(1))));
    expect(isPalindrome(head)).toBe(false);
  });
});
