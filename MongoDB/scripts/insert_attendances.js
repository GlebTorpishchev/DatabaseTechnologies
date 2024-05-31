const groups = db.groups.aggregate([
    { $sample: { size: 3 } }
  ]).toArray();
  
  groups.forEach(group => {
    const students = db.students.find({ "group_id": group._id }).toArray();
    const subjects = db.subjects.find({ "direction_id": group.direction_id }).toArray();
  
    students.forEach(student => {
      subjects.forEach(subject => {
        const teacher = db.teachers.findOne({ "_id": subject.teacher_id });
        
        for (let day = 1; day <= 30; day++) {
          const date = new Date(2023, 0, day);
  
          for (let lesson_number = 1; lesson_number <= 3; lesson_number++) {
            db.attendances.insertOne({
              "student_id": student._id,
              "subject_id": subject._id,
              "teacher_id": teacher._id,
              "date": date,
              "lesson_number": lesson_number,
              "attended": Math.random() > 0.2
            });
          }
        }
      });
    });
  });
  