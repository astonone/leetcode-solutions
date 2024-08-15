Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

![Pascal's triangle gif](./PascalTriangleAnimated2.gif)

Example 1:</br>
Input: rowIndex = 3</br>
Output: [1,3,3,1]</br>

Example 2:</br>
Input: rowIndex = 0</br>
Output: [1]</br>

Example 3:</br>
Input: rowIndex = 1</br>
Output: [1,1]</br>

Constraints:</br>
0 <= rowIndex <= 33</br>

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
