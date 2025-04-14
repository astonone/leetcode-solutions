A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.<br>
Given a string s, return true if it is a palindrome, or false otherwise.<br>

Example 1:<br>
Input: s = "A man, a plan, a canal: Panama"<br>
Output: true<br>
Explanation: "amanaplanacanalpanama" is a palindrome.<br>

Example 2:<br>
Input: s = "race a car"<br>
Output: false<br>
Explanation: "raceacar" is not a palindrome.<br>

Example 3:<br>
Input: s = " "<br>
Output: true<br>
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.<br>

Constraints:<br>
1 <= s.length <= 2 * 105<br>
s consists only of printable ASCII characters.<br>
