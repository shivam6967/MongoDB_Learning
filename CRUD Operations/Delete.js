// Deleting the Document from the database

db.studentInfo.deleteOne({ status: "A" });

// it fist find one / first data with status = "A" and Deletes

db.studentInfo.deleteMany({ class: "IT" });

// it deletes all the documents with the class = "IT"\

db.studentInfo.deleteMany({});

// it will delete entire collection
