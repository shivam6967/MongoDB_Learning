// Building the Database :-
db.inventory.insertMany([]);
db.collection("inventory").insertMany([
  {
    item: "mousepad",
    qty: 25,
    size: { h: 19, w: 22.85, uom: "cm" },
    status: "P",
  },
  {
    item: "notebook",
    qty: 50,
    size: { h: 8.5, w: 11, uom: "in" },
    status: "P",
  },
  {
    item: "paper",
    qty: 100,
    size: { h: 8.5, w: 11, uom: "in" },
    status: "D",
  },
  {
    item: "planner",
    qty: 75,
    size: { h: 22.85, w: 30, uom: "cm" },
    status: "D",
  },
]);

// Sort the Documents according to qty :-
db.inventory.find().sort({ qty: 1 }); // Ascending Order
db.inventory.find().sort({ qty: -1 }); // Descending Order

// Skip
db.inventory.find().skip(1); // Skips first document
db.inventory.find().skip(2); // Skips first 2 document

// Limit
db.inventory.find().limit(1); // Limits the number of documents in the output to 1

db.inventory.find().limit(2); // gets only 2 documents in output

// These are used in the PageNation Concept
