-- Write your PostgreSQL query statement below
select
    customer_number
from
    orders
group by customer_number
order by count('*') desc
limit 1;

-- Follow-up solution
select
    customer_number
from
    orders
group by customer_number
having count('*') = (
    select
        max(order_count)
    from
        (select count('*') as order_count
         from orders
         group by customer_number) as order_counts
);
