// Вывести списки групп каждому предмету с указанием преподавателя.
db.lessons.aggregate([
    { $lookup: { from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject" } },
    { $unwind: "$subject" },
    { $lookup: { from: "teachers", localField: "teacher_id", foreignField: "_id", as: "teacher" } },
    { $unwind: "$teacher" },
    { $group: { _id: { subject: "$subject.subject_name", group: "$group_id" }, teacher: { $addToSet: "$teacher.teacher_name" } } },
    { $project: { _id: 0, subject: "$_id.subject", group: "$_id.group", teacher: 1 } }
  ]);
