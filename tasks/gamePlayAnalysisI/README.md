# LeetCode SQL: 511. Game Play Analysis I

## 🧩 Problem Description

**Difficulty:** Easy  
**Link:** [LeetCode 511: Game Play Analysis I](https://leetcode.com/problems/game-play-analysis-i/)

**Objective:**  
Write an SQL query to report the first login date for each player.

**Table: `Activity`**

| Column Name   | Type    |
|---------------|---------|
| player_id     | int     |
| device_id     | int     |
| event_date    | date    |
| games_played  | int     |

- The combination of `player_id` and `event_date` is the primary key.
- This table records the activity of players who logged in and played a number of games (possibly 0) on a specific date using a specific device.

**Sample Input:**

| player_id | device_id | event_date | games_played |
|-----------|-----------|------------|--------------|
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-05-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |

**Expected Output:**

| player_id | first_login |
|-----------|-------------|
| 1         | 2016-03-01  |
| 2         | 2017-06-25  |
| 3         | 2016-03-02  |

## 🛠️ Setup Script

```sql
CREATE TABLE Activity (
  player_id INT,
  device_id INT,
  event_date DATE,
  games_played INT,
  PRIMARY KEY (player_id, event_date)
);

INSERT INTO Activity (player_id, device_id, event_date, games_played) VALUES
  (1, 2, '2016-03-01', 5),
  (1, 2, '2016-05-02', 6),
  (2, 3, '2017-06-25', 1),
  (3, 1, '2016-03-02', 0),
  (3, 4, '2018-07-03', 5);
