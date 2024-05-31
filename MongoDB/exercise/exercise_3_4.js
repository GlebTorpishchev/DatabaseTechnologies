// Вывести студентов с указанием возраста в годах.
const studentsWithAge = db.students.aggregate([
  {
    $project: {
      "full_name": 1,
      "birth_date": 1,
      "age": {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$birth_date"] },
            31557600000 // Количество миллисекунд в году
          ]
        }
      }
    }
  }
]);
print("Students with age:");
studentsWithAge.forEach(student => {
  print(student.full_name + ", " + student.age + " years old");
});