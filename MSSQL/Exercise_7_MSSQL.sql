-- Вывести по заданному предмету количество посещенных занятий.
SELECT Subjects.SubjectName, COUNT(Attendance.AttendanceID) AS AttendedClasses
FROM Subjects
LEFT JOIN Attendance ON Subjects.SubjectID = Attendance.SubjectID
GROUP BY Subjects.SubjectName;

-- Вывести по заданному предмету количество пропущенных занятий.
SELECT Subjects.SubjectName, 
       (SELECT COUNT(*) FROM ClassTimes) - COUNT(Attendance.AttendanceID) AS MissedClasses
FROM Subjects
LEFT JOIN Attendance ON Subjects.SubjectID = Attendance.SubjectID
GROUP BY Subjects.SubjectName;

-- Вывести по заданному преподавателю количество студентов на каждом занятии.
SELECT Subjects.SubjectName, Teachers.FullName AS TeacherName, COUNT(Attendance.StudentID) AS StudentCount
FROM Subjects
INNER JOIN Teachers ON Subjects.TeacherID = Teachers.TeacherID
INNER JOIN Attendance ON Subjects.SubjectID = Attendance.SubjectID
GROUP BY Subjects.SubjectName, Teachers.FullName;

-- Для каждого студента вывести общее время, потраченное на изучение каждого предмета.
SELECT Students.FullName, Subjects.SubjectName, SUM(DATEDIFF(MINUTE, ClassTimes.StartTime, ClassTimes.EndTime)) AS TotalStudyTime
FROM Students
INNER JOIN Attendance ON Students.StudentID = Attendance.StudentID
INNER JOIN ClassTimes ON Attendance.ClassTimeID = ClassTimes.ClassTimeID
INNER JOIN Subjects ON Attendance.SubjectID = Subjects.SubjectID
GROUP BY Students.FullName, Subjects.SubjectName;
