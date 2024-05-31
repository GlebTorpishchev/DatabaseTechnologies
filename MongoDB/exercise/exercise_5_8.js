  // Вывести кандидатов на отчисление (не сдан не менее двух предметов)
  db.students.aggregate([
    { $lookup: { from: "grades", localField: "_id", foreignField: "student_id", as: "grades" } },
    { $addFields: { failedSubjects: { $size: { $filter: { input: "$grades", as: "grade", cond: { $in: ["$$grade.grade", [null, 2]] } } } } } },
    { $match: { failedSubjects: { $gte: 2 } } },
    { $project: { _id: 1, full_name: 1, failedSubjects: 1 } }
  ]);
  