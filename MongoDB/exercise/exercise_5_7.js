  // Вывести студентов со всем оценками отлично и не имеющих несданный экзамен
  db.students.aggregate([
    { $lookup: { from: "grades", localField: "_id", foreignField: "student_id", as: "grades" } },
    { $match: { "grades": { $not: { $elemMatch: { grade: { $nin: [5, null] } } } } } },
    { $project: { _id: 1, full_name: 1, grades: 1 } }
  ]);
