// Вывести по заданному предмету количество посещенных занятий.
db.lessons.aggregate([
    { $match: { subject_id: ObjectId("ваш_objectId_предмета") } },
    { $project: { _id: 0, attendedCount: { $size: "$attendances" } } }
  ]);
