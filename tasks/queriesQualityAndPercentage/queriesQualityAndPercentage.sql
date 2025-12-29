select query_name,
       round(sum(1.00 * rating / position) / count(query_name), 2) as quality,
       round(100 * avg(
               case when rating < 3 then 1 else 0 end
                   ), 2)                                           as poor_query_percentage
from queries
group by query_name;
