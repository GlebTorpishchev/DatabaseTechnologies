// Вывести список студентов для поздравления по месяцам в формате Фамилия И.О., 
// день и название месяца рождения, номером группы и направлением обучения.
const studentsForCongrats = db.students.aggregate([
  { $project: { "full_name": 1, "birth_date": 1, "group_id": 1 } },
  {
    $addFields: {
      "birth_month": { $month: "$birth_date" },
      "birth_day": { $dayOfMonth: "$birth_date" }
    }
  },
  { $lookup: { from: "groups", localField: "group_id", foreignField: "_id", as: "group" } },
  { $unwind: "$group" },
  { $lookup: { from: "directions", localField: "group.direction_id", foreignField: "_id", as: "direction" } },
  { $unwind: "$direction" },
  { $project: { "full_name": 1, "birth_month": 1, "birth_day": 1, "group.group_number": 1, "direction.direction_name": 1 } }
]);
print("Students to congratulate:");
studentsForCongrats.forEach(student => {
  const monthName = new Date(null, student.birth_month - 1).toLocaleString('ru', { month: 'long' });
  print(student.full_name + ", " + student.birth_day + " " + monthName + ", " + student.group.group_number + ", " + student.direction.direction_name);
});
