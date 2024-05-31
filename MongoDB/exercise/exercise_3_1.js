// Вывести списки групп по заданному направлению с указанием номера группы в формате ФИО, бюджет/внебюджет. 
// Студентов выводить в алфавитном порядке.
const directionName = "Компьютерные науки";
const studentsByDirection = db.students.aggregate([
  { $lookup: { from: "groups", localField: "group_id", foreignField: "_id", as: "group" } },
  { $unwind: "$group" },
  { $lookup: { from: "directions", localField: "group.direction_id", foreignField: "_id", as: "direction" } },
  { $unwind: "$direction" },
  { $match: { "direction.direction_name": directionName } },
  { $sort: { "full_name": 1 } },
  { $project: { "full_name": 1, "is_budget": 1, "group.group_number": 1 } }
]);
print("Students in " + directionName + " direction:");
studentsByDirection.forEach(student => {
  const budgetType = student.is_budget ? "бюджет" : "внебюджет";
  print(student.full_name + ", " + student.group.group_number + ", " + budgetType);
});
