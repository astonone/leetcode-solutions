# LeetCode #584 — Find Customer Referee

**Difficulty:** Easy  
**Tags:** SQL  
**Link:** [https://leetcode.com/problems/find-customer-referee](https://leetcode.com/problems/find-customer-referee)

## Problem

Table: `Customer`

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| name        | varchar |
| referee_id  | int     |

In SQL, `id` is the primary key column for this table.  
Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.

Write an SQL query to report the names of the customer that are **not referred by** the customer with `id = 2`.

Return the result table in **any order**.

## Example

**Input:**

Customer table:

| id | name    | referee_id |
|----|---------|------------|
| 1  | Will    | null       |
| 2  | Jane    | null       |
| 3  | Alex    | 2          |
| 4  | Bill    | null       |
| 5  | Zack    | 1          |
| 6  | Mark    | 2          |

**Output:**

| name |
|------|
| Will |
| Jane |
| Bill |
| Zack |

## Notes

- You may need to use `IS NULL` to handle customers with no referee.
- Filter out rows where `referee_id = 2`.
