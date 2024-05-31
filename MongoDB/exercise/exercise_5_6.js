  // Определить группу с максимальной средней оценкой (включая не сдавших)
  db.grades.aggregate([
    { $group: { _id: "$group_id", averageGrade: { $avg: { $ifNull: ["$grade", 0] } } } },
    { $sort: { averageGrade: -1 } },
    { $limit: 1 }
  ]);
