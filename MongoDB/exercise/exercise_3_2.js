// Вывести студентов с фамилией, начинающейся с первой буквы вашей фамилии, 
// с указанием ФИО, номера группы и направления обучения.
const lastNameLetter = "И"; 
const studentsByLastName = db.students.aggregate([
  { $match: { "full_name": { $regex: "^" + lastNameLetter, $options: "i" } } },
  { $lookup: { from: "groups", localField: "group_id", foreignField: "_id", as: "group" } },
  { $unwind: "$group" },
  { $lookup: { from: "directions", localField: "group.direction_id", foreignField: "_id", as: "direction" } },
  { $unwind: "$direction" },
  { $project: { "full_name": 1, "group.group_number": 1, "direction.direction_name": 1 } }
]);
print("Students with last name starting with letter " + lastNameLetter + ":");
studentsByLastName.forEach(student => {
  print(student.full_name + ", " + student.group.group_number + ", " + student.direction.direction_name);
});
