const subject1 = db.subjects.findOne({ "subject_name": "Алгоритмы" });
const subject2 = db.subjects.findOne({ "subject_name": "Базы данных" });
const subject3 = db.subjects.findOne({ "subject_name": "Сети" });
const subject4 = db.subjects.findOne({ "subject_name": "Высшая математика" });
const subject5 = db.subjects.findOne({ "subject_name": "Дифференциальные уравнения" });
const subject6 = db.subjects.findOne({ "subject_name": "Квантовая физика" });
const subject7 = db.subjects.findOne({ "subject_name": "Термодинамика" });

const groups = db.groups.find().toArray();

groups.forEach(group => {
  const students = db.students.find({ "group_id": group._id }).toArray();
  const subjectSubset = [subject1, subject2, subject3];

  students.forEach(student => {
    subjectSubset.forEach(subject => {
      if (Math.random() > 0.2) {
        db.grades.insertOne({
          "student_id": student._id,
          "subject_id": subject._id,
          "grade": Math.floor(Math.random() * 4) + 2
        });
      }
    });
  });
});
