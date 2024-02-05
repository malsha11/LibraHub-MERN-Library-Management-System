const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

//Implement GET endpoint to retrieve all books
router.get("/", booksController.getAllBooks);

//Implement POST endpoint to add a new book
router.post("/", booksController.addBook);

//Implement GET endpoint to retrieve a book by ID
router.get("/:id", booksController.getById);

//Implement PUT endpoint to update a book by ID
router.put("/:id", booksController.updateBook);


module.exports = router;