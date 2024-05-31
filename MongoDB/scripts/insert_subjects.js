const directionCS = db.directions.findOne({ "direction_name": "Компьютерные науки" });
const directionMath = db.directions.findOne({ "direction_name": "Математика" });
const directionPhysics = db.directions.findOne({ "direction_name": "Физика" });

const teacher1 = db.teachers.findOne({ "full_name": "Александров Александр Александрович" });
const teacher2 = db.teachers.findOne({ "full_name": "Борисов Борис Борисович" });
const teacher3 = db.teachers.findOne({ "full_name": "Владимиров Владимир Владимирович" });
const teacher4 = db.teachers.findOne({ "full_name": "Григорьев Григорий Григорьевич" });
const teacher5 = db.teachers.findOne({ "full_name": "Дмитриев Дмитрий Дмитриевич" });

db.subjects.insertMany([
  { "_id": ObjectId(), "subject_name": "Алгоритмы", "teacher_id": teacher1._id, "direction_id": directionCS._id },
  { "_id": ObjectId(), "subject_name": "Базы данных", "teacher_id": teacher2._id, "direction_id": directionCS._id },
  { "_id": ObjectId(), "subject_name": "Сети", "teacher_id": teacher3._id, "direction_id": directionCS._id },
  { "_id": ObjectId(), "subject_name": "Высшая математика", "teacher_id": teacher4._id, "direction_id": directionMath._id },
  { "_id": ObjectId(), "subject_name": "Дифференциальные уравнения", "teacher_id": teacher5._id, "direction_id": directionMath._id },
  { "_id": ObjectId(), "subject_name": "Квантовая физика", "teacher_id": teacher1._id, "direction_id": directionPhysics._id },
  { "_id": ObjectId(), "subject_name": "Термодинамика", "teacher_id": teacher2._id, "direction_id": directionPhysics._id }
]);
