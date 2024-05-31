  // Определить сколько студентов обучатся у каждого их преподавателей.
  db.lessons.aggregate([
    { $group: { _id: "$teacher_id", studentCount: { $sum: { $size: "$students" } } } },
    { $lookup: { from: "teachers", localField: "_id", foreignField: "_id", as: "teacher" } },
    { $unwind: "$teacher" },
    { $project: { _id: 0, teacher: "$teacher.teacher_name", studentCount: 1 } }
  ]);
  