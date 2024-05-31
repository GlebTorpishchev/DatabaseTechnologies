  // Определить, какую дисциплину изучает максимальное количество студентов.
  db.grades.aggregate([
    { $lookup: { from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject" } },
    { $unwind: "$subject" },
    { $group: { _id: "$subject.subject_name", studentCount: { $sum: 1 } } },
    { $sort: { studentCount: -1 } },
    { $limit: 1 }
  ]);
