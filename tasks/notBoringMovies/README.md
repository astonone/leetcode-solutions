# LeetCode #620 — Not Boring Movies

**Difficulty:** Easy  
**Tags:** SQL  
**Link:** [https://leetcode.com/problems/not-boring-movies](https://leetcode.com/problems/not-boring-movies)

## Problem

Table: `Cinema`

| Column Name | Type |
|-------------|------|
| id          | int  |
| movie       | varchar |
| description | varchar |
| rating      | float   |

id is the primary key for this table.  
Each row contains information about the name of a movie, its description, and its rating.

Write an SQL query to display the movies with an odd `id` and a **description that is not "boring"**.  
Return the result table **ordered by rating in descending order**.

## Example

**Input:**

Cinema table:

| id | movie    | description | rating |
|----|----------|-------------|--------|
| 1  | War      | great 3D    | 8.9    |
| 2  | Science  | fiction     | 8.5    |
| 3  | irish    | boring      | 6.2    |
| 4  | Ice song | Fantacy     | 8.6    |
| 5  | House card | Interesting | 9.1 |

**Output:**

| id | movie      | description | rating |
|----|------------|-------------|--------|
| 5  | House card | Interesting | 9.1    |
| 1  | War        | great 3D    | 8.9    |
