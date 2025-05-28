# Swap Salary

**Link:** [https://leetcode.com/problems/swap-salary](https://leetcode.com/problems/swap-salary)

## Description

Table: `Salary`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |
| sex         | ENUM    |
| salary      | int     |

`id` is the primary key column for this table.
The `sex` column is ENUM value of type (`'m'`, `'f'`).
The table contains information about an employee.

Write a SQL query to swap all `'f'` and `'m'` values (i.e., change all `'f'` values to `'m'` and vice versa) with a **single update statement** and **no intermediate temporary tables**.

Return the result table in **any order**.

## Example

Input:

```
Salary table:
+----+------+-----+--------+
| id | name | sex | salary |
+----+------+-----+--------+
| 1  | A    | m   | 2500   |
| 2  | B    | f   | 1500   |
| 3  | C    | m   | 5500   |
| 4  | D    | f   | 500    |
+----+------+-----+--------+
```

Output:

```
+----+------+-----+--------+
| id | name | sex | salary |
+----+------+-----+--------+
| 1  | A    | f   | 2500   |
| 2  | B    | m   | 1500   |
| 3  | C    | f   | 5500   |
| 4  | D    | m   | 500    |
+----+------+-----+--------+
```

## Schema

```sql
CREATE TABLE Salary (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    sex ENUM('m', 'f'),
    salary INT
);
```

## Test Data

```sql
INSERT INTO Salary (id, name, sex, salary) VALUES
(1, 'A', 'm', 2500),
(2, 'B', 'f', 1500),
(3, 'C', 'm', 5500),
(4, 'D', 'f', 500);
```
