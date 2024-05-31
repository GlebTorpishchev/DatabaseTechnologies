db.directions.insertMany([
  { "_id": ObjectId(), "direction_name": "Компьютерные науки", "groups": [] },
  { "_id": ObjectId(), "direction_name": "Математика", "groups": [] },
  { "_id": ObjectId(), "direction_name": "Физика", "groups": [] }
]);

const directionCS = db.directions.findOne({ "direction_name": "Компьютерные науки" })._id;
const directionMath = db.directions.findOne({ "direction_name": "Математика" })._id;
const directionPhysics = db.directions.findOne({ "direction_name": "Физика" })._id;

const groups = [
  { "_id": ObjectId(), "group_name": "Группа 101", "direction_id": directionCS, "students": [] },
  { "_id": ObjectId(), "group_name": "Группа 102", "direction_id": directionCS, "students": [] },
  { "_id": ObjectId(), "group_name": "Группа 103", "direction_id": directionCS, "students": [] },
  { "_id": ObjectId(), "group_name": "Группа 201", "direction_id": directionMath, "students": [] },
  { "_id": ObjectId(), "group_name": "Группа 202", "direction_id": directionMath, "students": [] },
  { "_id": ObjectId(), "group_name": "Группа 203", "direction_id": directionMath, "students": [] },
  { "_id": ObjectId(), "group_name": "Группа 301", "direction_id": directionPhysics, "students": [] },
  { "_id": ObjectId(), "group_name": "Группа 302", "direction_id": directionPhysics, "students": [] },
  { "_id": ObjectId(), "group_name": "Группа 303", "direction_id": directionPhysics, "students": [] }
];

db.groups.insertMany(groups);

db.directions.updateOne({ "_id": directionCS }, { "$set": { "groups": groups.slice(0, 3).map(group => group._id) } });
db.directions.updateOne({ "_id": directionMath }, { "$set": { "groups": groups.slice(3, 6).map(group => group._id) } });
db.directions.updateOne({ "_id": directionPhysics }, { "$set": { "groups": groups.slice(6, 9).map(group => group._id) } });

const students = [
    // Студенты группы 101
    { "full_name": "Иванов Иван Иванович", "birth_date": ISODate("2000-01-01T00:00:00Z"), "address": { "city": "Москва", "street": "Ленина", "house_number": "10" }, "phones": ["+79161234567"], "email": "ivanov@example.com", "group_id": groups[0]._id, "is_budget": true },
    { "full_name": "Петров Петр Петрович", "birth_date": ISODate("2000-02-02T00:00:00Z"), "address": { "city": "Москва", "street": "Советская", "house_number": "20" }, "phones": ["+79161234568"], "email": "petrov@example.com", "group_id": groups[0]._id, "is_budget": false },
    { "full_name": "Сидоров Сидр Сидорович", "birth_date": ISODate("2000-03-03T00:00:00Z"), "address": { "city": "Москва", "street": "Московская", "house_number": "30" }, "phones": ["+79161234569"], "email": "sidorov@example.com", "group_id": groups[0]._id, "is_budget": true },
    { "full_name": "Кузнецова Мария Сергеевна", "birth_date": ISODate("2000-04-04T00:00:00Z"), "address": { "city": "Москва", "street": "Красная", "house_number": "40" }, "phones": ["+79161234570"], "email": "kuznetsova@example.com", "group_id": groups[0]._id, "is_budget": false },
    { "full_name": "Васильева Анна Викторовна", "birth_date": ISODate("2000-05-05T00:00:00Z"), "address": { "city": "Москва", "street": "Железнодорожная", "house_number": "50" }, "phones": ["+79161234571"], "email": "vasilieva@example.com", "group_id": groups[0]._id, "is_budget": true },
    { "full_name": "Попов Алексей Владимирович", "birth_date": ISODate("2000-06-06T00:00:00Z"), "address": { "city": "Москва", "street": "Тверская", "house_number": "60" }, "phones": ["+79161234572"], "email": "popov@example.com", "group_id": groups[0]._id, "is_budget": false },
    { "full_name": "Смирнов Дмитрий Александрович", "birth_date": ISODate("2000-07-07T00:00:00Z"), "address": { "city": "Москва", "street": "Арбатская", "house_number": "70" }, "phones": ["+79161234573"], "email": "smirnov@example.com", "group_id": groups[0]._id, "is_budget": true },
  
    // Студенты группы 102
    { "full_name": "Михайлов Михаил Михайлович", "birth_date": ISODate("2000-01-08T00:00:00Z"), "address": { "city": "Москва", "street": "Петровская", "house_number": "80" }, "phones": ["+79161234574"], "email": "mikhailov@example.com", "group_id": groups[1]._id, "is_budget": false },
    { "full_name": "Семенов Семен Семенович", "birth_date": ISODate("2000-02-09T00:00:00Z"), "address": { "city": "Москва", "street": "Гагаринская", "house_number": "90" }, "phones": ["+79161234575"], "email": "semenov@example.com", "group_id": groups[1]._id, "is_budget": true },
    { "full_name": "Егоров Егор Егорович", "birth_date": ISODate("2000-03-10T00:00:00Z"), "address": { "city": "Москва", "street": "Бауманская", "house_number": "100" }, "phones": ["+79161234576"], "email": "egorov@example.com", "group_id": groups[1]._id, "is_budget": false },
    { "full_name": "Тарасов Тарас Тарасович", "birth_date": ISODate("2000-04-11T00:00:00Z"), "address": { "city": "Москва", "street": "Новослободская", "house_number": "110" }, "phones": ["+79161234577"], "email": "tarasov@example.com", "group_id": groups[1]._id, "is_budget": true },
    { "full_name": "Богданов Богдан Богданович", "birth_date": ISODate("2000-05-12T00:00:00Z"), "address": { "city": "Москва", "street": "Пушкинская", "house_number": "120" }, "phones": ["+79161234578"], "email": "bogdanov@example.com", "group_id": groups[1]._id, "is_budget": false },
    { "full_name": "Алексеев Алексей Алексеевич", "birth_date": ISODate("2000-06-13T00:00:00Z"), "address": { "city": "Москва", "street": "Лубянская", "house_number": "130" }, "phones": ["+79161234579"], "email": "alekseev@example.com", "group_id": groups[1]._id, "is_budget": true },
    { "full_name": "Григорьев Григорий Григорьевич", "birth_date": ISODate("2000-07-14T00:00:00Z"), "address": { "city": "Москва", "street": "Охотный ряд", "house_number": "140" }, "phones": ["+79161234580"], "email": "grigoriev@example.com", "group_id": groups[1]._id, "is_budget": false },
  
    // Студенты группы 103
    { "full_name": "Николаев Николай Николаевич", "birth_date": ISODate("2000-01-15T00:00:00Z"), "address": { "city": "Москва", "street": "Якиманская", "house_number": "150" }, "phones": ["+79161234581"], "email": "nikolaev@example.com", "group_id": groups[2]._id, "is_budget": true },
    { "full_name": "Федоров Федор Федорович", "birth_date": ISODate("2000-02-16T00:00:00Z"), "address": { "city": "Москва", "street": "Садовая", "house_number": "160" }, "phones": ["+79161234582"], "email": "fedorov@example.com", "group_id": groups[2]._id, "is_budget": false },
    { "full_name": "Кириллов Кирилл Кириллович", "birth_date": ISODate("2000-03-17T00:00:00Z"), "address": { "city": "Москва", "street": "Сретенская", "house_number": "170" }, "phones": ["+79161234583"], "email": "kirillov@example.com", "group_id": groups[2]._id, "is_budget": true },
    { "full_name": "Макаров Максим Максимович", "birth_date": ISODate("2000-04-18T00:00:00Z"), "address": { "city": "Москва", "street": "Мясницкая", "house_number": "180" }, "phones": ["+79161234584"], "email": "makarov@example.com", "group_id": groups[2]._id, "is_budget": false },
    { "full_name": "Волков Владимир Владимирович", "birth_date": ISODate("2000-05-19T00:00:00Z"), "address": { "city": "Москва", "street": "Петровская", "house_number": "190" }, "phones": ["+79161234585"], "email": "volkov@example.com", "group_id": groups[2]._id, "is_budget": true },
    { "full_name": "Соколов Сергей Сергеевич", "birth_date": ISODate("2000-06-20T00:00:00Z"), "address": { "city": "Москва", "street": "Басманная", "house_number": "200" }, "phones": ["+79161234586"], "email": "sokolov@example.com", "group_id": groups[2]._id, "is_budget": false },
    { "full_name": "Титов Тимофей Тимофеевич", "birth_date": ISODate("2000-07-21T00:00:00Z"), "address": { "city": "Москва", "street": "Таганская", "house_number": "210" }, "phones": ["+79161234587"], "email": "titov@example.com", "group_id": groups[2]._id, "is_budget": true },
  
    // Студенты группы 201
    { "full_name": "Зайцев Захар Захарович", "birth_date": ISODate("2000-01-22T00:00:00Z"), "address": { "city": "Москва", "street": "Новослободская", "house_number": "220" }, "phones": ["+79161234588"], "email": "zaitsev@example.com", "group_id": groups[3]._id, "is_budget": false },
    { "full_name": "Шестаков Шестак Шестакович", "birth_date": ISODate("2000-02-23T00:00:00Z"), "address": { "city": "Москва", "street": "Тверская", "house_number": "230" }, "phones": ["+79161234589"], "email": "shestakov@example.com", "group_id": groups[3]._id, "is_budget": true },
    { "full_name": "Иванов Иван Иваныч", "birth_date": ISODate("2000-03-24T00:00:00Z"), "address": { "city": "Москва", "street": "Арбатская", "house_number": "240" }, "phones": ["+79161234590"], "email": "ivanov2@example.com", "group_id": groups[3]._id, "is_budget": false },
    { "full_name": "Кузнецов Кузьма Кузьмич", "birth_date": ISODate("2000-04-25T00:00:00Z"), "address": { "city": "Москва", "street": "Садовая", "house_number": "250" }, "phones": ["+79161234591"], "email": "kuznetsov2@example.com", "group_id": groups[3]._id, "is_budget": true },
    { "full_name": "Богданов Богдан Богданыч", "birth_date": ISODate("2000-05-26T00:00:00Z"), "address": { "city": "Москва", "street": "Гагаринская", "house_number": "260" }, "phones": ["+79161234592"], "email": "bogdanov2@example.com", "group_id": groups[3]._id, "is_budget": false },
    { "full_name": "Васильев Василий Васильевич", "birth_date": ISODate("2000-06-27T00:00:00Z"), "address": { "city": "Москва", "street": "Пушкинская", "house_number": "270" }, "phones": ["+79161234593"], "email": "vasiliev2@example.com", "group_id": groups[3]._id, "is_budget": true },
    { "full_name": "Петров Петр Петрович", "birth_date": ISODate("2000-07-28T00:00:00Z"), "address": { "city": "Москва", "street": "Таганская", "house_number": "280" }, "phones": ["+79161234594"], "email": "petrov2@example.com", "group_id": groups[3]._id, "is_budget": false },
  
    // Студенты группы 202
    { "full_name": "Сидоров Сидр Сидорович", "birth_date": ISODate("2000-01-29T00:00:00Z"), "address": { "city": "Москва", "street": "Мясницкая", "house_number": "290" }, "phones": ["+79161234595"], "email": "sidorov2@example.com", "group_id": groups[4]._id, "is_budget": true },
    { "full_name": "Кузнецова Мария Марьевна", "birth_date": ISODate("2000-02-30T00:00:00Z"), "address": { "city": "Москва", "street": "Бауманская", "house_number": "300" }, "phones": ["+79161234596"], "email": "kuznetsova2@example.com", "group_id": groups[4]._id, "is_budget": false },
    { "full_name": "Васильева Анна Анина", "birth_date": ISODate("2000-03-31T00:00:00Z"), "address": { "city": "Москва", "street": "Охотный ряд", "house_number": "310" }, "phones": ["+79161234597"], "email": "vasilieva2@example.com", "group_id": groups[4]._id, "is_budget": true },
    { "full_name": "Попов Алексей Александрыч", "birth_date": ISODate("2000-04-01T00:00:00Z"), "address": { "city": "Москва", "street": "Лубянская", "house_number": "320" }, "phones": ["+79161234598"], "email": "popov2@example.com", "group_id": groups[4]._id, "is_budget": false },
    { "full_name": "Смирнов Дмитрий Дмитриевич", "birth_date": ISODate("2000-05-02T00:00:00Z"), "address": { "city": "Москва", "street": "Петровская", "house_number": "330" }, "phones": ["+79161234599"], "email": "smirnov2@example.com", "group_id": groups[4]._id, "is_budget": true },
    { "full_name": "Михайлов Михаил Михалыч", "birth_date": ISODate("2000-06-03T00:00:00Z"), "address": { "city": "Москва", "street": "Новослободская", "house_number": "340" }, "phones": ["+79161234600"], "email": "mikhailov2@example.com", "group_id": groups[4]._id, "is_budget": false },
    { "full_name": "Семенов Семен Семеныч", "birth_date": ISODate("2000-07-04T00:00:00Z"), "address": { "city": "Москва", "street": "Гагаринская", "house_number": "350" }, "phones": ["+79161234601"], "email": "semenov2@example.com", "group_id": groups[4]._id, "is_budget": true },
  
    // Студенты группы 203
    { "full_name": "Егоров Егор Егорович", "birth_date": ISODate("2000-01-05T00:00:00Z"), "address": { "city": "Москва", "street": "Бауманская", "house_number": "360" }, "phones": ["+79161234602"], "email": "egorov2@example.com", "group_id": groups[5]._id, "is_budget": false },
    { "full_name": "Тарасов Тарас Тарасович", "birth_date": ISODate("2000-02-06T00:00:00Z"), "address": { "city": "Москва", "street": "Пушкинская", "house_number": "370" }, "phones": ["+79161234603"], "email": "tarasov2@example.com", "group_id": groups[5]._id, "is_budget": true },
    { "full_name": "Богданов Богдан Богданыч", "birth_date": ISODate("2000-03-07T00:00:00Z"), "address": { "city": "Москва", "street": "Охотный ряд", "house_number": "380" }, "phones": ["+79161234604"], "email": "bogdanov2@example.com", "group_id": groups[5]._id, "is_budget": false },
    { "full_name": "Алексеев Алексей Алексеевич", "birth_date": ISODate("2000-04-08T00:00:00Z"), "address": { "city": "Москва", "street": "Лубянская", "house_number": "390" }, "phones": ["+79161234605"], "email": "alekseev2@example.com", "group_id": groups[5]._id, "is_budget": true },
    { "full_name": "Григорьев Григорий Григорьевич", "birth_date": ISODate("2000-05-09T00:00:00Z"), "address": { "city": "Москва", "street": "Арбатская", "house_number": "400" }, "phones": ["+79161234606"], "email": "grigoriev2@example.com", "group_id": groups[5]._id, "is_budget": false },
    { "full_name": "Николаев Николай Николаевич", "birth_date": ISODate("2000-06-10T00:00:00Z"), "address": { "city": "Москва", "street": "Мясницкая", "house_number": "410" }, "phones": ["+79161234607"], "email": "nikolaev2@example.com", "group_id": groups[5]._id, "is_budget": true },
    { "full_name": "Федоров Федор Федорович", "birth_date": ISODate("2000-07-11T00:00:00Z"), "address": { "city": "Москва", "street": "Сретенская", "house_number": "420" }, "phones": ["+79161234608"], "email": "fedorov2@example.com", "group_id": groups[5]._id, "is_budget": false },
  
    // Студенты группы 301
    { "full_name": "Кириллов Кирилл Кириллович", "birth_date": ISODate("2000-01-12T00:00:00Z"), "address": { "city": "Москва", "street": "Садовая", "house_number": "430" }, "phones": ["+79161234609"], "email": "kirillov2@example.com", "group_id": groups[6]._id, "is_budget": true },
    { "full_name": "Макаров Максим Максимович", "birth_date": ISODate("2000-02-13T00:00:00Z"), "address": { "city": "Москва", "street": "Басманная", "house_number": "440" }, "phones": ["+79161234610"], "email": "makarov2@example.com", "group_id": groups[6]._id, "is_budget": false },
    { "full_name": "Волков Владимир Владимирович", "birth_date": ISODate("2000-03-14T00:00:00Z"), "address": { "city": "Москва", "street": "Таганская", "house_number": "450" }, "phones": ["+79161234611"], "email": "volkov2@example.com", "group_id": groups[6]._id, "is_budget": true },
    { "full_name": "Соколов Сергей Сергеевич", "birth_date": ISODate("2000-04-15T00:00:00Z"), "address": { "city": "Москва", "street": "Новослободская", "house_number": "460" }, "phones": ["+79161234612"], "email": "sokolov2@example.com", "group_id": groups[6]._id, "is_budget": false },
    { "full_name": "Титов Тимофей Тимофеевич", "birth_date": ISODate("2000-05-16T00:00:00Z"), "address": { "city": "Москва", "street": "Петровская", "house_number": "470" }, "phones": ["+79161234613"], "email": "titov2@example.com", "group_id": groups[6]._id, "is_budget": true },
    { "full_name": "Зайцев Захар Захарович", "birth_date": ISODate("2000-06-17T00:00:00Z"), "address": { "city": "Москва", "street": "Гагаринская", "house_number": "480" }, "phones": ["+79161234614"], "email": "zaitsev2@example.com", "group_id": groups[6]._id, "is_budget": false },
    { "full_name": "Шестаков Шестак Шестакович", "birth_date": ISODate("2000-07-18T00:00:00Z"), "address": { "city": "Москва", "street": "Лубянская", "house_number": "490" }, "phones": ["+79161234615"], "email": "shestakov2@example.com", "group_id": groups[6]._id, "is_budget": true },
  
    // Студенты группы 302
    { "full_name": "Иванов Иван Иваныч", "birth_date": ISODate("2000-01-19T00:00:00Z"), "address": { "city": "Москва", "street": "Арбатская", "house_number": "500" }, "phones": ["+79161234616"], "email": "ivanov3@example.com", "group_id": groups[7]._id, "is_budget": false },
    { "full_name": "Кузнецов Кузьма Кузьмич", "birth_date": ISODate("2000-02-20T00:00:00Z"), "address": { "city": "Москва", "street": "Садовая", "house_number": "510" }, "phones": ["+79161234617"], "email": "kuznetsov3@example.com", "group_id": groups[7]._id, "is_budget": true },
    { "full_name": "Богданов Богдан Богданыч", "birth_date": ISODate("2000-03-21T00:00:00Z"), "address": { "city": "Москва", "street": "Мясницкая", "house_number": "520" }, "phones": ["+79161234618"], "email": "bogdanov3@example.com", "group_id": groups[7]._id, "is_budget": false },
    { "full_name": "Васильев Василий Васильевич", "birth_date": ISODate("2000-04-22T00:00:00Z"), "address": { "city": "Москва", "street": "Бауманская", "house_number": "530" }, "phones": ["+79161234619"], "email": "vasiliev3@example.com", "group_id": groups[7]._id, "is_budget": true },
    { "full_name": "Петров Петр Петрович", "birth_date": ISODate("2000-05-23T00:00:00Z"), "address": { "city": "Москва", "street": "Гагаринская", "house_number": "540" }, "phones": ["+79161234620"], "email": "petrov3@example.com", "group_id": groups[7]._id, "is_budget": false },
    { "full_name": "Сидоров Сидр Сидорович", "birth_date": ISODate("2000-06-24T00:00:00Z"), "address": { "city": "Москва", "street": "Петровская", "house_number": "550" }, "phones": ["+79161234621"], "email": "sidorov3@example.com", "group_id": groups[7]._id, "is_budget": true },
    { "full_name": "Кузнецова Мария Марьевна", "birth_date": ISODate("2000-07-25T00:00:00Z"), "address": { "city": "Москва", "street": "Сретенская", "house_number": "560" }, "phones": ["+79161234622"], "email": "kuznetsova3@example.com", "group_id": groups[7]._id, "is_budget": false }
  ];