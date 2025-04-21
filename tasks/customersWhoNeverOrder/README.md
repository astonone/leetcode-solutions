Table: Customers<br>
+-------------+---------+<br>
| Column Name | Type    |<br>
+-------------+---------+<br>
| id          | int     |<br>
| name        | varchar |<br>
+-------------+---------+<br>
id is the primary key (column with unique values) for this table.<br>
Each row of this table indicates the ID and name of a customer.<br>

Table: Orders<br>
+-------------+------+<br>
| Column Name | Type |<br>
+-------------+------+<br>
| id          | int  |<br>
| customerId  | int  |<br>
+-------------+------+<br>
id is the primary key (column with unique values) for this table.<br>
customerId is a foreign key (reference columns) of the ID from the Customers table.<br>
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.<br>

Write a solution to find all customers who never order anything.<br>
Return the result table in any order.

The result format is in the following example.<br>
Example 1:<br>
Input:<br>
Customers table:<br>
+----+-------+<br>
| id | name  |<br>
+----+-------+<br>
| 1  | Joe   |<br>
| 2  | Henry |<br>
| 3  | Sam   |<br>
| 4  | Max   |<br>
+----+-------+<br>
Orders table:<br>
+----+------------+<br>
| id | customerId |<br>
+----+------------+<br>
| 1  | 3          |<br>
| 2  | 1          |<br>
+----+------------+<br>
Output:<br>
+-----------+<br>
| Customers |<br>
+-----------+<br>
| Henry     |<br>
| Max       |<br>
+-----------+<br>
