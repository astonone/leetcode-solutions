# LeetCode SQL: 196. Delete Duplicate Emails

## 🧩 Problem

**Description:**  
Write a SQL query to delete all duplicate email entries in a table named `Person`, keeping only the entries with the smallest `Id`.

**Table:**

| Id | Email            |
|----|------------------|
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |

**Expected Output:**

| Id | Email            |
|----|------------------|
| 1  | john@example.com |
| 2  | bob@example.com  |

## 🛠️ Setup Script

```sql
CREATE TABLE Person (
  Id INT NOT NULL,
  Email VARCHAR(255),
  PRIMARY KEY (Id)
);

INSERT INTO Person (Id, Email) VALUES
  (1, 'john@example.com'),
  (2, 'bob@example.com'),
  (3, 'john@example.com');
