select name as Customers from customers where id not in (select customerId from orders)

-- Safer version for case when order table contains nulls
SELECT name AS Customers
FROM customers c
         LEFT JOIN orders o ON c.id = o.customerId
WHERE o.id IS NULL
