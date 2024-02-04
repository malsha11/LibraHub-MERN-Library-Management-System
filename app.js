const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middlewares
app.use("/",(req, res, next) => {
    res.send("This is our starting App");
});


mongoose.connect("mongodb+srv://admin:w6OGY9MzQFo6SnEB@cluster0.tb42d32.mongodb.net/LibraHub Library Management System?retryWrites=true&w=majority")
.then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));