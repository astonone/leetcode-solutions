Table: Person<br>
+-------------+---------+<br>
| Column Name | Type    |<br>
+-------------+---------+<br>
| personId    | int     |<br>
| lastName    | varchar |<br>
| firstName   | varchar |<br>
+-------------+---------+<br>
personId is the primary key (column with unique values) for this table.
This table contains information about the ID of some persons and their first and last names.


Table: Address<br>
+-------------+---------+<br>
| Column Name | Type    |<br>
+-------------+---------+<br>
| addressId   | int     |<br>
| personId    | int     |<br>
| city        | varchar |<br>
| state       | varchar |<br>
+-------------+---------+<br>
addressId is the primary key (column with unique values) for this table.<br>
Each row of this table contains information about the city and state of one person with ID = PersonId.

Write a solution to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead.<br>
Return the result table in any order.<br>
The result format is in the following example.<br>
Example 1:<br>
Input:<br>
Person table:<br>
+----------+----------+-----------+<br>
| personId | lastName | firstName |<br>
+----------+----------+-----------+<br>
| 1        | Wang     | Allen     |<br>
| 2        | Alice    | Bob       |<br>
+----------+----------+-----------+<br>
Address table:<br>
+-----------+----------+---------------+------------+<br>
| addressId | personId | city          | state      |<br>
+-----------+----------+---------------+------------+<br>
| 1         | 2        | New York City | New York   |<br>
| 2         | 3        | Leetcode      | California |<br>
+-----------+----------+---------------+------------+<br>
Output:<br>
+-----------+----------+---------------+----------+<br>
| firstName | lastName | city          | state    |<br>
+-----------+----------+---------------+----------+<br>
| Allen     | Wang     | Null          | Null     |<br>
| Bob       | Alice    | New York City | New York |<br>
+-----------+----------+---------------+----------+<br>
Explanation:<br>
There is no address in the address table for the personId = 1 so we return null in their city and state.<br>
addressId = 1 contains information about the address of personId = 2.<br>
