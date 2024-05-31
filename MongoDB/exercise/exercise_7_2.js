  // Вывести по заданному предмету количество пропущенных занятий.
  db.lessons.aggregate([
    { $match: { subject_id: ObjectId("ваш_objectId_предмета") } },
    { $project: { _id: 0, missedCount: { $subtract: [{ $size: "$students" }, { $size: "$attendances" }] } } }
  ]);
