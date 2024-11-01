// Read -- Fetching the Data from the Database

db.studentsInfo.find(); // Fetch all the Documents

db.studentsInfo.find({ name: "shiva" }); // here we get the document with the name : = shiva

db.studentsInfo.find({ status: { $in: ["A", "B"] } });
// we get the documents where the status is A OR B

// AND
db.studentsInfo.find({ status: "A", qty: { $lt: 30 } });
// we get the document with status = "A" AND qty < 30
// , acts as AND

// OR
db.studentsInfo.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] });
