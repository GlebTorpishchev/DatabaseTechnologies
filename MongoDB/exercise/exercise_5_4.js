  // Определить долю ставших студентов по каждой дисциплине (не оценки или 2 считать не сдавшими).
  db.grades.aggregate([
    { $match: { grade: { $nin: [null, 2] } } },
    { $lookup: { from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject" } },
    { $unwind: "$subject" },
    { $group: { _id: "$subject.subject_name", passedCount: { $sum: 1 } } },
    { $project: { _id: 0, subject: "$_id", passedCount: 1 } }
  ]);
