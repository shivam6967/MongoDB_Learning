// Updating the data from the Collections from Database

db.studentsInfo.find({ name: "namaOne" });

// we want to update only one document

db.studentsInfo.updateOne(
  // fist select the document
  { name: "nameOne" },

  // Set the Updated Values
  {
    $set: { name: "nameTwo", class: "A" },
    $currentDate: { lastModified: true }, // it will store the data updated time
  }
);

// we want to update to many documents :-

db.studentsInfo.updateMany(
  // Target
  { class: "A" },

  // Update
  {
    $set: { age: 10, salary: 20 },
    $currentDate: { lastModified: true },
  }
);
