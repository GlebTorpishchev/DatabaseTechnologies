// Вывести количество бюджетных и внебюджетных мест по группам. 
// Для каждой группы вывести номер и название направления.
const budgetStatusByGroup = db.groups.aggregate([
  { $lookup: { from: "students", localField: "_id", foreignField: "group_id", as: "students" } },
  { $unwind: "$students" },
  { $group: { _id: { group_id: "$_id", direction_id: "$direction_id" }, budgetCount: { $sum: { $cond: { if: "$students.is_budget", then: 1, else: 0 } } }, nonBudgetCount: { $sum: { $cond: { if: { $eq: ["$students.is_budget", false] }, then: 1, else: 0 } } } } }, { $lookup: { from: "directions", localField: "_id.direction_id", foreignField: "_id", as: "direction" } }, { $unwind: "$direction" }, { $project: { "group_number": "$_id.group_number", "direction_name": "$direction.direction_name", "budgetCount": 1, "nonBudgetCount": 1 } } ]);
  print("Budget and non-budget places count by group:");
  budgetStatusByGroup.forEach(group => {
  print("Group " + group.group_number + ", Direction: " + group.direction_name);
  print("Budget: " + group.budgetCount + ", Non-budget: " + group.nonBudgetCount);
  });
