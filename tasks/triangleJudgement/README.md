# LeetCode #586 — Triangle Judgement

**Difficulty:** Easy  
**Tags:** SQL  
**Link:** [https://leetcode.com/problems/triangle-judgement](https://leetcode.com/problems/triangle-judgement)

## Problem

Table: `Triangle`

| Column Name | Type |
|-------------|------|
| x           | int  |
| y           | int  |
| z           | int  |

This table may contain duplicate rows.  
Each row of this table contains three positive integers x, y, and z, representing the side lengths of a triangle.

Write an SQL query to report for every record in the table whether the triangle is **valid** or **not**.

A triangle is **valid** if the sum of any two sides is **greater** than the remaining side.

Return the result table in **any order**.

## Example

**Input:**

Triangle table:

| x | y | z |
|---|---|---|
| 13 | 15 | 30 |
| 10 | 20 | 15 |

**Output:**

| x | y | z | triangle |
|----|----|----|-----------|
| 13 | 15 | 30 | No        |
| 10 | 20 | 15 | Yes       |
