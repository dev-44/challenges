/*
Members Count
In this MySQL challenge, your query should return the names of the people who are reported to (excluding null values), 
the number of members that report to them, and the average age of those members as an integer. 
The rows should be ordered by the names in alphabetical order. Your output should look like the following table.

ReportsTo               members                 Average age
Bob Boss                2                       24
Daniel Smith            1                       22
David S                 1                       25
Jenny Richards          2                       31 
*/

SELECT mt.ReportsTo, COUNT(mt.ID) as Members, ROUND(AVG(mt.Age), 0) as "Average Age"
FROM maintable_GJSXS mt
WHERE ReportsTo IS NOT NULL
GROUP BY mt.ReportsTo
ORDER BY mt.ReportsTo