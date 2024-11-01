// Aggregation Pipeline :-

// insert the data :-
db.orders.insertMany([
  {
    _id: 0,
    name: "Pepperoni",
    size: "small",
    price: 19,
    quantity: 10,
    date: ISODate("2021-03-13T08:14:30Z"),
  },
  {
    _id: 1,
    name: "Pepperoni",
    size: "medium",
    price: 20,
    quantity: 20,
    date: ISODate("2021-03-13T09:13:24Z"),
  },
  {
    _id: 2,
    name: "Pepperoni",
    size: "large",
    price: 21,
    quantity: 30,
    date: ISODate("2021-03-17T09:22:12Z"),
  },
  {
    _id: 3,
    name: "Cheese",
    size: "small",
    price: 12,
    quantity: 15,
    date: ISODate("2021-03-13T11:21:39.736Z"),
  },
]);

// Calculate Total Order Quantity  , using Aggregation Pipeline

db.orders.aggregate([
  // Stage 1: Filter pizza order documents by pizza size
  {
    $match: { size: "medium" },
  },

  // Stage 2: Group remaining documents by pizza name and calculate total quantity
  {
    $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } },
  },
]);

//  The $match stage:

// Filters the pizza order documents to pizzas with a size of medium.

// Passes the remaining documents to the $group stage.

// The $group stage:

// Groups the remaining documents by pizza name.

// Uses $sum to calculate the total order quantity for each pizza name. The total is stored in the totalQuantity field returned by the aggregation pipeline.
