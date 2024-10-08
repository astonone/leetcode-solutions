Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

1. Example 1:</br>
Input: nums = [2,7,11,15], target = 9</br>
Output: [0,1]</br>
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</br>

2. Example 2:</br>
Input: nums = [3,2,4], target = 6</br>
Output: [1,2]</br>

3. Example 3:</br>
Input: nums = [3,3], target = 6</br>
Output: [0,1]</br>


Constraints:

1. 2 <= nums.length <= 104
2. -109 <= nums[i] <= 109
3. -109 <= target <= 109
4. Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
