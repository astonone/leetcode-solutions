# LeetCode #619 — Biggest Single Number

**Difficulty:** Easy  
**Tags:** SQL  
**Link:** [https://leetcode.com/problems/biggest-single-number](https://leetcode.com/problems/biggest-single-number)

## Problem

Table: `MyNumbers`

| Column Name | Type |
|-------------|------|
| num         | int  |

There is no primary key for this table. It may contain duplicates.

A **single number** is a number that appears only **once** in the table.

Write an SQL query to report the **largest single number**.  
If no such number exists, report **null**.

## Example

**Input:**

MyNumbers table:

| num |
|-----|
| 8   |
| 8   |
| 3   |
| 3   |
| 1   |
| 4   |
| 5   |
| 6   |

**Output:**

| num |
|-----|
| 6   |
