with users_activity as (select activity_date,
                               user_id
                        from activity
                        where activity_date >= to_date('2019-07-27', 'yyyy-mm-dd') - interval '29 days'
                        and activity_date <= to_date('2019-07-27', 'yyyy-mm-dd')

                        group by user_id, activity_date)
select activity_date as day,
       count(*) as active_users
from users_activity
group by activity_date;
