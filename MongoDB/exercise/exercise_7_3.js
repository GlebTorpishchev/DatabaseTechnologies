  // Вывести по заданному преподавателю количество студентов на каждом занятии.
  db.lessons.aggregate([
    { $match: { teacher_id: ObjectId("ваш_objectId_преподавателя") } },
    { $project: { _id: 0, lesson_id: "$_id", studentCount: { $size: "$students" } } }
  ]);
