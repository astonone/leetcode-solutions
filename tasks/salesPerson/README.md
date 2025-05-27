# LeetCode #607 — Sales Person

**Difficulty:** Easy  
**Tags:** SQL  
**Link:** [https://leetcode.com/problems/sales-person](https://leetcode.com/problems/sales-person)

## Problem

Table: `SalesPerson`

| Column Name | Type    |
|-------------|---------|
| sales_id    | int     |
| name        | varchar |
| salary      | int     |
| commission_rate | int |
| hire_date   | date    |

`sales_id` is the primary key of this table.  
Each row of this table indicates the name and the ID of a salesperson alongside their salary, commission rate, and hire date.

Table: `Company`

| Column Name | Type    |
|-------------|---------|
| com_id      | int     |
| name        | varchar |
| city        | varchar |

`com_id` is the primary key of this table.  
Each row of this table indicates the name and the ID of a company and the city in which the company is located.

Table: `Orders`

| Column Name     | Type |
|------------------|------|
| order_id         | int  |
| order_date       | date |
| com_id           | int  |
| sales_id         | int  |
| amount           | int  |

`order_id` is the primary key of this table.  
`com_id` is a foreign key to `Company`.  
`sales_id` is a foreign key to `SalesPerson`.  
Each row in this table contains information about one order.

Write an SQL query to report the names of all the salespersons who **did not** have any orders related to the company named **"RED"**.

Return the result table in **any order**.

## Example

**Input:**

SalesPerson table:

| sales_id | name   | salary | commission_rate | hire_date |
|----------|--------|--------|------------------|------------|
| 1        | John   | 100000 | 6                | 2006-01-01 |
| 2        | Amy    | 12000  | 5                | 2010-01-01 |
| 3        | Mark   | 65000  | 12               | 2008-01-01 |
| 4        | Pam    | 25000  | 25               | 2005-01-01 |
| 5        | Alex   | 5000   | 10               | 2007-01-01 |

Company table:

| com_id | name | city     |
|--------|------|----------|
| 1      | RED  | Boston   |
| 2      | ORG  | New York |
| 3      | AID  | San Jose |
| 4      | FIN  | Chicago  |

Orders table:

| order_id | order_date | com_id | sales_id | amount |
|----------|------------|--------|----------|--------|
| 1        | 2014-01-01 | 3      | 4        | 100000 |
| 2        | 2014-01-02 | 4      | 5        | 5000   |
| 3        | 2014-01-03 | 1      | 1        | 50000  |
| 4        | 2014-01-04 | 1      | 4        | 25000  |

**Output:**

| name |
|------|
| Amy  |
| Mark |
| Alex |
