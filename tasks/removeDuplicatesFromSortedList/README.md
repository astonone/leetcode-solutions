# LeetCode #83 — Remove Duplicates from Sorted List

**Difficulty:** Easy  
**Tags:** Linked List, Recursion  
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list](https://leetcode.com/problems/remove-duplicates-from-sorted-list)

## Problem

Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once.

Return the linked list **sorted** as well.

## Examples
**Example 1:**<br>
![Sorted list 1](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg)
**Input:**<br>
head = [1,1,2]<br>
**Output:**<br>
[1, 2]

**Example 2:**<br>
![Sorted list 2](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg)
**Input:**<br>
head = [1,1,2,3,3]<br>
**Output:**<br>
[1,2,3]

## Constraints

- The number of nodes in both lists is in the range `[0, 300]`.
- `-100 <= Node.val <= 100`
- The list is guaranteed to be **sorted** in ascending order.
