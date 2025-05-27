# LeetCode #596 — Classes More Than 5 Students

**Difficulty:** Easy  
**Tags:** SQL  
**Link:** [https://leetcode.com/problems/classes-more-than-5-students](https://leetcode.com/problems/classes-more-than-5-students)

## Problem

Table: `Courses`

| Column Name | Type |
|-------------|------|
| student     | varchar |
| class       | varchar |

(student, class) is the primary key column for this table.  
Each row in this table indicates that the student is enrolled in the class.

Write an SQL query to report all the classes that have **at least 5 students**.

## Example

**Input:**

Courses table:

| student | class |
|---------|-------|
| A       | Math  |
| B       | Math  |
| C       | Math  |
| D       | Math  |
| E       | Math  |
| F       | Science |
| G       | Science |
| H       | Science |
| I       | Science |
| J       | Literature |

**Output:**

| class |
|--------|
| Math   |
| Science|
