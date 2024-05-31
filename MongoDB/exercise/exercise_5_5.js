
  // Определить среднюю оценку по предметам (для сдавших студентов)
  db.grades.aggregate([
    { $match: { grade: { $nin: [null, 2] } } },
    { $group: { _id: "$subject_id", averageGrade: { $avg: "$grade" } } },
    { $lookup: { from: "subjects", localField: "_id", foreignField: "_id", as: "subject" } },
    { $unwind: "$subject" },
    { $project: { _id: 0, subject: "$subject.subject_name", averageGrade: 1 } }
  ]);
