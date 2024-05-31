const direction1 = db.directions.findOne({ "direction_name": "Компьютерные науки" });
const direction2 = db.directions.findOne({ "direction_name": "Математика" });
const direction3 = db.directions.findOne({ "direction_name": "Физика" });

const group1 = { "_id": ObjectId(), "group_name": "Группа 101", "direction_id": direction1._id, "students": [] };
const group2 = { "_id": ObjectId(), "group_name": "Группа 102", "direction_id": direction1._id, "students": [] };
const group3 = { "_id": ObjectId(), "group_name": "Группа 201", "direction_id": direction2._id, "students": [] };
const group4 = { "_id": ObjectId(), "group_name": "Группа 202", "direction_id": direction2._id, "students": [] };
const group5 = { "_id": ObjectId(), "group_name": "Группа 301", "direction_id": direction3._id, "students": [] };
const group6 = { "_id": ObjectId(), "group_name": "Группа 302", "direction_id": direction3._id, "students": [] };

db.groups.insertMany([group1, group2, group3, group4, group5, group6]);

db.directions.updateOne({ "_id": direction1._id }, { "$push": { "groups": { "$each": [group1._id, group2._id] } } });
db.directions.updateOne({ "_id": direction2._id }, { "$push": { "groups": { "$each": [group3._id, group4._id] } } });
db.directions.updateOne({ "_id": direction3._id }, { "$push": { "groups": { "$each": [group5._id, group6._id] } } });
