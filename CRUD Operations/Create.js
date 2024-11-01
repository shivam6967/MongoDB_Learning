//  Creating / Inserting the Data into the Database

// show dbs

// use db_name
// use students

// db.createCollection("collection_name")
// db.createCollection("studentInfo")

// Inserting the Single Document

db.studentInfo.insertOne({
  name: "nameOne",
  age: 18,
  email: "nameOne@gmail.com",
});

// Inserting Multiple Documents

db.studentInfo.insertMany([
  {
    name: "nameOne",
    age: 18,
    email: "nameOne@gmail.com",
  },

  {
    name: "nameOne",
    age: 18,
    email: "nameOne@gmail.com",
  },
  {
    name: "nameOne",
    age: 18,
    email: "nameOne@gmail.com",
  },
  {
    name: "nameOne",
    age: 18,
    email: "nameOne@gmail.com",
  },
]);
