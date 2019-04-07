-- Number: 182
-- Title: Duplicate Emails

SELECT email FROM Person GROUP BY email HAVING COUNT(*) > 1;