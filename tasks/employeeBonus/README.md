# LeetCode SQL: 577. Employee Bonus

## 🧩 Problem Description

**Difficulty:** Easy  
**Link:** [LeetCode 577: Employee Bonus](https://leetcode.com/problems/employee-bonus/description/)

**Objective:**  
Write an SQL query to report the name and bonus amount of each employee with a bonus less than 1000. If an employee does not have a bonus, their bonus should be reported as null.

**Table: `Employee`**

| Column Name | Type    |
|-------------|---------|
| empId       | int     |
| name        | varchar |
| supervisor  | int     |
| salary      | int     |

- empId is the primary key column for this table.
- Each row of this table indicates the name and the ID of an employee in addition to their salary and the id of their manager.

**Table: `Bonus`**

| Column Name | Type |
|-------------|------|
| empId       | int  |
| bonus       | int  |

- empId is the primary key column for this table.
- empId is a foreign key (reference column) to empId from the Employee table.
- Each row of this table contains the id of an employee and their respective bonus.

**Sample Input:**

`Employee` table:

| empId | name   | supervisor | salary |
|-------|--------|------------|--------|
| 3     | Brad   | null       | 4000   |
| 1     | John   | 3          | 1000   |
| 2     | Dan    | 3          | 2000   |
| 4     | Thomas | 3          | 4000   |

`Bonus` table:

| empId | bonus |
|-------|-------|
| 2     | 500   |
| 4     | 2000  |

**Expected Output:**

| name | bonus |
|------|-------|
| Brad | null  |
| John | null  |
| Dan  | 500   |

## 🛠️ Setup Script

```sql
CREATE TABLE Employee (
  empId INT PRIMARY KEY,
  name VARCHAR(100),
  supervisor INT,
  salary INT
);

CREATE TABLE Bonus (
  empId INT PRIMARY KEY,
  bonus INT
);

INSERT INTO Employee (empId, name, supervisor, salary) VALUES
  (3, 'Brad', NULL, 4000),
  (1, 'John', 3, 1000),
  (2, 'Dan', 3, 2000),
  (4, 'Thomas', 3, 4000);

INSERT INTO Bonus (empId, bonus) VALUES
  (2, 500),
  (4, 2000);
