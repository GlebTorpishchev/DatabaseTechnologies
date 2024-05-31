// Вывести студентов, у которых день рождения в текущем месяце.
const currentMonth = new Date().getMonth() + 1;
const studentsBornThisMonth = db.students.aggregate([
  { $project: { "full_name": 1, "birth_date": 1 } },
  { $addFields: { "birth_month": { $month: "$birth_date" } } },
  { $match: { "birth_month": currentMonth } }
]);
print("Students born this month:");
studentsBornThisMonth.forEach(student => {
  print(student.full_name);
});
