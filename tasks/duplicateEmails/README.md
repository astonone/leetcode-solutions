Table: Person<br>
+-------------+---------+<br>
| Column Name | Type    |<br>
+-------------+---------+<br>
| id          | int     |<br>
| email       | varchar |<br>
+-------------+---------+<br>
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.


Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL.<br>
Return the result table in any order.<br><br>
The result format is in the following example.

Example 1:<br>
Input:<br>
Person table:<br>
+----+---------+<br>
| id | email   |<br>
+----+---------+<br>
| 1  | a@b.com |<br>
| 2  | c@d.com |<br>
| 3  | a@b.com |<br>
+----+---------+<br>
Output:<br>
+---------+<br>
| Email   |<br>
+---------+<br>
| a@b.com |<br>
+---------+<br>
Explanation: a@b.com is repeated two times.<br>
