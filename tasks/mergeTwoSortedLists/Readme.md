# LeetCode #21 — Merge Two Sorted Lists

**Difficulty:** Easy  
**Tags:** Linked List, Recursion  
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists](https://leetcode.com/problems/merge-two-sorted-lists)

## Problem

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted linked list, formed by splicing together the nodes of the two input lists.

Return the head of the merged linked list.

## Examples
![Sorted list merge](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)
**Example 1:**<br>
**Input:**<br>
list1 = [1, 2, 4]<br>
list2 = [1, 3, 4]<br>
**Output:**<br>
[1, 1, 2, 3, 4, 4]

**Example 2:**<br>
**Input:**<br>
list1 = []<br>
list2 = []<br>
**Output:**<br>
[]

**Example 3:**<br>
**Input:**<br>
list1 = []<br>
list2 = [0]<br>
**Output:**<br>
[0]

## Constraints

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in non-decreasing order.

## Notes

- Use two pointers to traverse both lists.
- Compare values and attach the smaller one to the merged list.
- A dummy head node simplifies the implementation.
