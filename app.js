const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");


const app = express();

// Middlewares
app.use(express.json());
app.use("/books", router); // localhost:5000/books


mongoose.connect("mongodb+srv://admin:w6OGY9MzQFo6SnEB@cluster0.tb42d32.mongodb.net/LibraHub Library Management System?retryWrites=true&w=majority")
.then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));