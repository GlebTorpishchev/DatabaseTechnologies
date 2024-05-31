-- Вывести списки групп каждому предмету с указанием преподавателя.
SELECT Subjects.SubjectName, Groups.GroupName, Teachers.FullName AS TeacherName
FROM Subjects
INNER JOIN Teachers ON Subjects.TeacherID = Teachers.TeacherID
INNER JOIN Groups ON Subjects.StudyDirection = Groups.StudyDirection;

-- Определить, какую дисциплину изучает максимальное количество студентов.
SELECT Subjects.SubjectName, COUNT(*) AS StudentCount
FROM Subjects
INNER JOIN Grades ON Subjects.SubjectID = Grades.SubjectID
GROUP BY Subjects.SubjectName
ORDER BY COUNT(*) DESC
LIMIT 1;

-- Определить сколько студентов обучатся у каждого их преподавателей.
SELECT Teachers.FullName AS TeacherName, COUNT(*) AS StudentCount
FROM Teachers
INNER JOIN Subjects ON Teachers.TeacherID = Subjects.TeacherID
INNER JOIN Grades ON Subjects.SubjectID = Grades.SubjectID
GROUP BY Teachers.FullName;

-- Определить долю ставших студентов по каждой дисциплине (не оценки или 2 считать не сдавшими).
SELECT Subjects.SubjectName, 
       COUNT(CASE WHEN Grades.Grade > 2 THEN 1 END) / COUNT(*) AS PassRate
FROM Subjects
INNER JOIN Grades ON Subjects.SubjectID = Grades.SubjectID
GROUP BY Subjects.SubjectName;

-- Определить среднюю оценку по предметам (для сдавших студентов)
SELECT Subjects.SubjectName, AVG(Grades.Grade) AS AverageGrade
FROM Subjects
INNER JOIN Grades ON Subjects.SubjectID = Grades.SubjectID
WHERE Grades.Grade IS NOT NULL AND Grades.Grade > 2
GROUP BY Subjects.SubjectName;

-- Определить группу с максимальной средней оценкой (включая не сдавших)
SELECT Groups.GroupName, AVG(COALESCE(Grades.Grade, 0)) AS AverageGrade
FROM Groups
LEFT JOIN Students ON Groups.GroupID = Students.GroupID
LEFT JOIN Grades ON Students.StudentID = Grades.StudentID
GROUP BY Groups.GroupName
ORDER BY AVG(COALESCE(Grades.Grade, 0)) DESC
LIMIT 1;

-- Вывести студентов со всем оценками отлично и не имеющих несданный экзамен
SELECT Students.FullName, 
       GROUP_CONCAT(Grades.Grade ORDER BY Subjects.SubjectName) AS Grades
FROM Students
INNER JOIN Grades ON Students.StudentID = Grades.StudentID
INNER JOIN Subjects ON Grades.SubjectID = Subjects.SubjectID
WHERE Grades.Grade = 5 OR Grades.Grade IS NULL
GROUP BY Students.FullName
HAVING COUNT(Grades.Grade) = (SELECT COUNT(*) FROM Subjects);

-- Вывести кандидатов на отчисление (не сдан не менее двух предметов)
SELECT Students.FullName, 
       GROUP_CONCAT(Grades.Grade ORDER BY Subjects.SubjectName) AS Grades
FROM Students
INNER JOIN Grades ON Students.StudentID = Grades.StudentID
INNER JOIN Subjects ON Grades.SubjectID = Subjects.SubjectID
WHERE Grades.Grade IS NULL OR Grades.Grade < 3
GROUP BY Students.FullName
HAVING COUNT(CASE WHEN Grades.Grade IS NULL OR Grades.Grade < 3 THEN 1 END) >= 2;
