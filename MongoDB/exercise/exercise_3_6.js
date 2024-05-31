// Вывести количество студентов по каждому направлению.
const studentsCountByDirection = db.students.aggregate([
  { $lookup: { from: "groups", localField: "group_id", foreignField: "_id", as: "group" } },
  { $unwind: "$group" },
  { $lookup: { from: "directions", localField: "group.direction_id", foreignField: "_id", as: "direction" } },
  { $unwind: "$direction" },
  { $group: { _id: "$direction.direction_name", count: { $sum: 1 } } }
]);
print("Students count by direction:");
studentsCountByDirection.forEach(result => {
  print(result._id + ": " + result.count);
});
