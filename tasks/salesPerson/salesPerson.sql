select
    name
    from salesperson
where sales_id not in (
                        select
                            sp.sales_id
                            from salesperson as sp
                            left join orders as o on o.sales_id = sp.sales_id
                            left join company as c on o.com_id = c.com_id
                        where c.name = 'RED'
                        );
