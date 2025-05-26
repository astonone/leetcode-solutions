# LeetCode #586 — Customer Placing the Largest Number of Orders

**Difficulty:** Easy  
**Tags:** SQL  
**Link:** [https://leetcode.com/problems/customer-placing-the-largest-number-of-orders](https://leetcode.com/problems/customer-placing-the-largest-number-of-orders)

## Problem

Tables: `Orders`

| Column Name | Type    |
|-------------|---------|
| order_number | int     |
| customer_number | int  |

In SQL, `order_number` is the primary key column for this table.  
`customer_number` is a foreign key to `Customer` table.

Write an SQL query to find the customer_number for the customer who has placed the **largest number of orders**.

The test cases are guaranteed to have **exactly one** customer placing the most orders.

## Example

**Input:**

Orders table:

| order_number | customer_number |
|--------------|-----------------|
| 1            | 1               |
| 2            | 2               |
| 3            | 3               |
| 4            | 3               |

**Output:**

| customer_number |
|-----------------|
| 3               |
