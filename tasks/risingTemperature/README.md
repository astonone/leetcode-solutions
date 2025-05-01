# LeetCode SQL: 197. Rising Temperature

## 🧩 Problem

**Description:**  
Write a SQL query to find all dates' Ids with higher temperatures compared to its previous dates (yesterday). Return the result table in any order.

**Table:**

| id | recordDate | temperature |
|----|------------|-------------|
| 1  | 2015-01-01 | 10          |
| 2  | 2015-01-02 | 25          |
| 3  | 2015-01-03 | 20          |
| 4  | 2015-01-04 | 30          |

**Expected Output:**

| id |
|----|
| 2  |
| 4  |

## 🛠️ Setup Script

```sql
CREATE TABLE Weather (
  id INT PRIMARY KEY,
  recordDate DATE,
  temperature INT
);

INSERT INTO Weather (id, recordDate, temperature) VALUES
  (1, '2015-01-01', 10),
  (2, '2015-01-02', 25),
  (3, '2015-01-03', 20),
  (4, '2015-01-04', 30);
