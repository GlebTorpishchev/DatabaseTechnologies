CREATE TABLE Groups (
    GroupID INT PRIMARY KEY IDENTITY(1,1),
    GroupName NVARCHAR(50) NOT NULL,
    StudyDirection NVARCHAR(50) NOT NULL,
    BudgetStatus NVARCHAR(20) NOT NULL
);

CREATE TABLE Students (
    StudentID INT PRIMARY KEY IDENTITY(1,1),
    FullName NVARCHAR(100) NOT NULL,
    DateOfBirth DATE NOT NULL,
    City NVARCHAR(50) NOT NULL,
    Street NVARCHAR(50) NOT NULL,
    HouseNumber NVARCHAR(10) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    GroupID INT NOT NULL,
    FOREIGN KEY (GroupID) REFERENCES Groups(GroupID)
);

CREATE TABLE StudentPhones (
    PhoneID INT PRIMARY KEY IDENTITY(1,1),
    StudentID INT NOT NULL,
    PhoneNumber NVARCHAR(15) NOT NULL,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);

CREATE TABLE Teachers (
    TeacherID INT PRIMARY KEY IDENTITY(1,1),
    FullName NVARCHAR(100) NOT NULL,
    Subject NVARCHAR(50) NOT NULL
);

CREATE TABLE Subjects (
    SubjectID INT PRIMARY KEY IDENTITY(1,1),
    SubjectName NVARCHAR(100) NOT NULL,
    TeacherID INT NOT NULL,
    StudyDirection NVARCHAR(50) NOT NULL,
    FOREIGN KEY (TeacherID) REFERENCES Teachers(TeacherID)
);

CREATE TABLE Grades (
    GradeID INT PRIMARY KEY IDENTITY(1,1),
    StudentID INT NOT NULL,
    SubjectID INT NOT NULL,
    Grade INT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID)
);

CREATE TABLE ClassTimes (
    ClassTimeID INT PRIMARY KEY IDENTITY(1,1),
    StartTime TIME NOT NULL,
    EndTime TIME NOT NULL
);

CREATE TABLE Attendance (
    AttendanceID INT PRIMARY KEY IDENTITY(1,1),
    StudentID INT NOT NULL,
    ClassTimeID INT NOT NULL,
    SubjectID INT NOT NULL,
    TeacherID INT NOT NULL,
    ClassDate DATE NOT NULL,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (ClassTimeID) REFERENCES ClassTimes(ClassTimeID),
    FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID),
    FOREIGN KEY (TeacherID) REFERENCES Teachers(TeacherID)
);

INSERT INTO Groups (GroupName, StudyDirection, BudgetStatus)
VALUES ('Informatsionnye tekhnologii', 'Programmirovanie', 'Byudzhet'),
       ('Ekonomika', 'Finansy', 'Vnebyudzhet'),
       ('Meditsina', 'Terapiya', 'Byudzhet');

-- Группы для направления "Информационные технологии"
INSERT INTO Groups (GroupName, StudyDirection, BudgetStatus)
VALUES ('IT-101', 'Programmirovanie', 'Byudzhet'),
       ('IT-102', 'Programmirovanie', 'Byudzhet'),
       ('IT-103', 'Programmirovanie', 'Vnebyudzhet');

-- Группы для направления "Экономика"
INSERT INTO Groups (GroupName, StudyDirection, BudgetStatus)
VALUES ('Eco-201', 'Finansy', 'Vnebyudzhet'),
       ('Eco-202', 'Finansy', 'Byudzhet'),
       ('Eco-203', 'Marketing', 'Vnebyudzhet');

-- Группы для направления "Медицина"
INSERT INTO Groups (GroupName, StudyDirection, BudgetStatus)
VALUES ('Med-301', 'Terapiya', 'Byudzhet'),
       ('Med-302', 'Khirurgiya', 'Vnebyudzhet'),
       ('Med-303', 'Pediatrya', 'Byudzhet');

-- Вставка студентов в группу IT-101
INSERT INTO Students (FullName, DateOfBirth, City, Street, HouseNumber, Email, GroupID)
VALUES ('Ivanov Ivan Ivanovich', '1998-05-15', 'Moskva', 'Lenina', '10', 'ivanov@example.com', 1),
       ('Petrov Petr Petrovich', '1999-08-21', 'Sankt-Peterburg', 'Pushkina', '5', 'petrov@example.com', 1),
       ('Sidorov Sidor Sidorovich', '1997-11-03', 'Ekaterinburg', 'Kirova', '20', 'sidorov@example.com', 1),
       ('Smirnova Anna Igorevna', '2000-03-08', 'Novosibirsk', 'Gagarina', '15', 'smirnova@example.com', 1),
       ('Kozlova Elena Dmitrievna', '1996-09-25', 'Kazan', 'Mira', '30', 'kozlova@example.com', 1),
       ('Nikolaev Nikolay Nikolaevich', '1999-07-12', 'Ufa', 'Lenina', '25', 'nikolaev@example.com', 1),
       ('Orlov Oleg Olegovich', '1998-12-18', 'Voronezh', 'Stroiteley', '12', 'orlov@example.com', 1);

-- Вставка студентов в группу Eco-201
INSERT INTO Students (FullName, DateOfBirth, City, Street, HouseNumber, Email, GroupID)
VALUES ('Kuznetsova Ekaterina Sergeevna', '1997-04-30', 'Tomsk', 'Kirova', '3', 'kuznetsova@example.com', 6),
       ('Mikhailov Mikhail Mikhailovich', '1996-10-11', 'Omsk', 'Pushkina', '7', 'mikhailov@example.com', 6),
       ('Shmidt Natalya Aleksandrovna', '1999-02-18', 'Krasnoyarsk', 'Lenina', '8', 'shmidt@example.com', 6),
       ('Kostina Anna Vladimirovna', '2000-06-25', 'Ulyanovsk', 'Stroiteley', '17', 'kostina@example.com', 6),
       ('Belova Irina Petrovna', '1998-08-03', 'Irkutsk', 'Mira', '21', 'belova@example.com', 6),
       ('Alexandrov Alexander Aleksandrovich', '1997-12-14', 'Samara', 'Gagarina', '13', 'alexandrov@example.com', 6),
       ('Romanova Olga Denisovna', '1999-05-20', 'Chelyabinsk', 'Zhukova', '2', 'romanova@example.com', 6);

-- Вставка студентов в группу Med-301
INSERT INTO Students (FullName, DateOfBirth, City, Street, HouseNumber, Email, GroupID)
VALUES ('Popov Alexey Vladimirovich', '1998-09-17', 'Perm', 'Lenina', '11', 'popov@example.com', 11),
       ('Volkova Olga Ivanovna', '1997-02-08', 'Rostov-na-Donu', 'Gagarina', '9', 'volkova@example.com', 11),
       ('Grigoryev Pavel Petrovich', '2000-07-25', 'Saratov', 'Mira', '4', 'grigoryev@example.com', 11),
       ('Koroleva Natalya Alexeevna', '1999-04-12', 'Krasnodar', 'Pushkina', '6', 'koroleva@example.com', 11),
       ('Andreev Andrey Sergeyevich', '1996-11-30', 'Volgograd', 'Kirova', '22', 'andreev@example.com', 11),
       ('Semenov Semen Semenovich', '1998-12-03', 'Nizhniy Novgorod', 'Stroiteley', '14', 'semenov@example.com', 11),
       ('Kuzmina Irina Dmitrievna', '1997-08-19', 'Ufa', 'Lermontova', '18', 'kuzmina@example.com', 11);

INSERT INTO Teachers (FullName, Subject)
VALUES ('Ivanova Anna Petrovna', 'Matematika'),
       ('Petrov Ivan Ivanovich', 'Fizika'),
       ('Sidorova Mariya Sergeevna', 'Istoriya'),
       ('Kozlov Pavel Alekseevich', 'Khimiya'),
       ('Nikolaev Aleksey Vladimirovich', 'Informatika');

INSERT INTO Subjects (SubjectName, TeacherID, StudyDirection)
VALUES ('Algebra', 1, 'Programmirovanie'),
       ('Fizicheskaya khimiya', 4, 'Finansy'),
       ('Istoriya Rossii', 3, 'Meditsina'),
       ('Fizika vysshikh energiy', 2, 'Programmirovanie'),
       ('Osnovy programmirovaniya', 5, 'Programmirovanie');

INSERT INTO Grades (StudentID, SubjectID, Grade)
VALUES (1, 1, 5),
       (2, 1, 4),
       (3, 3, 3),
       (4, 2, 5),
       (5, 4, 4),
       (6, 5, 5),
       (7, 5, NULL);

INSERT INTO ClassTimes (StartTime, EndTime)
VALUES ('08:00', '09:30'),
       ('09:40', '11:10'),
       ('11:20', '12:50'),
       ('13:30', '15:00');

INSERT INTO Attendance (StudentID, ClassTimeID, SubjectID, TeacherID, ClassDate)
VALUES (1, 1, 1, 1, '2024-03-01'),
       (2, 1, 1, 1, '2024-03-01'),
       (3, 1, 1, 1, '2024-03-01');
