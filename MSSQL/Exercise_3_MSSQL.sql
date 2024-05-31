-- Вывести списки групп по заданному направлению с указанием номера группы в формате ФИО, бюджет/внебюджет. Студентов выводить в алфавитном порядке.
SELECT CONCAT(Students.FullName, ', ', Groups.GroupName, ', ', Groups.BudgetStatus) AS Student_Group_Info
FROM Students
INNER JOIN Groups ON Students.GroupID = Groups.GroupID
WHERE Groups.StudyDirection = 'Programmirovanie'
ORDER BY Students.FullName;

-- Вывести студентов с фамилией, начинающейся с первой буквы вашей фамилии, с указанием ФИО, номера группы и направления обучения.
SELECT CONCAT(Students.FullName, ', ', Groups.GroupName, ', ', Groups.StudyDirection) AS Student_Group_Info
FROM Students
INNER JOIN Groups ON Students.GroupID = Groups.GroupID
WHERE Students.FullName LIKE 'Ivanov%'
ORDER BY Students.FullName;

-- Вывести список студентов для поздравления по месяцам в формате Фамилия И.О., день и название месяца рождения, номером группы и направлением обучения.
SELECT CONCAT(Students.FullName, ', ', DAY(Students.DateOfBirth), ' ', MONTHNAME(Students.DateOfBirth), ', ', Groups.GroupName, ', ', Groups.StudyDirection) AS Birthday_Info
FROM Students
INNER JOIN Groups ON Students.GroupID = Groups.GroupID
ORDER BY MONTH(Students.DateOfBirth), DAY(Students.DateOfBirth);

-- Вывести студентов с указанием возраста в годах.
SELECT CONCAT(Students.FullName, ', ', DATEDIFF(CURRENT_DATE(), Students.DateOfBirth) / 365, ' years') AS Student_Age
FROM Students;

-- Вывести студентов, у которых день рождения в текущем месяце.
SELECT CONCAT(Students.FullName, ', ', DAY(Students.DateOfBirth), ' ', MONTHNAME(Students.DateOfBirth)) AS Birthday_Info
FROM Students
WHERE MONTH(Students.DateOfBirth) = MONTH(CURRENT_DATE());

-- Вывести количество студентов по каждому направлению.
SELECT StudyDirection, COUNT(*) AS Student_Count
FROM Groups
GROUP BY StudyDirection;

-- Вывести количество бюджетных и внебюджетных мест по группам. Для каждой группы вывести номер и название направления.
SELECT StudyDirection, GroupName, BudgetStatus, COUNT(*) AS Seat_Count
FROM Groups
GROUP BY StudyDirection, GroupName, BudgetStatus;
