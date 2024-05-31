  // Для каждого студента вывести общее время, потраченное на изучение каждого предмета.
  db.students.aggregate([
    { $unwind: "$lessons" },
    { $group: { _id: { student_id: "$_id", subject_id: "$lessons.subject_id" }, totalTime: { $sum: "$lessons.duration" } } },
    { $lookup: { from: "subjects", localField: "_id.subject_id", foreignField: "_id", as: "subject" } },
    { $unwind: "$subject" },
    { $lookup: { from: "students", localField: "_id.student_id", foreignField: "_id", as: "student" } },
    { $unwind: "$student" },
    { $project: { _id: 0, student: "$student.full_name", subject: "$subject.subject_name", totalTime: 1 } }
  ]);
  