# LibraHub Library Management System

This is a simple CRUD application for Library Management, implemented using the MERN stack.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Front-end Screenshots](#front-end-screenshots)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Library Management System allows users to perform CRUD operations on a collection of books. It consists of a back-end API developed with Node.js, Express, and MongoDB, and a front-end application built using a front-end framework/library of your choice.

## Features

- List all books with details such as title, author, and publication year.
- View detailed information about a selected book.
- Add new books to the collection.
- Edit existing book details.
- Delete a book directly from the book details page or the book list.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- MongoDB

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/LibraHub-MERN-Library-Management-System
   
2. **Navigate to the project directory:**
   
    ```bash
   cd library-management-system
    
3. **Install dependencies for both the front-end and back-end:**
   
    ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
4. **Set up the MongoDB database:**
   
   Make sure your MongoDB server is running.
   Update the MongoDB connection string in App.js.

5. **Run the back-end server:**
   
    ```bash
   cd ../backend
   npm start

6. **Run the back-end server:**
   
    ```bash
   cd ../backend
   npm start
    
7. **Run the front-end application:**
   
    ```bash
   cd ../frontend
   npm start


## Front-end Screenshots

 **Home Page:**

![Home Page 1](https://github.com/malsha11/LibraHub-MERN-Library-Management-System/assets/84215169/ab6e5ee3-06db-4f3b-ace1-292da231b317)

![Home Page 2](https://github.com/malsha11/LibraHub-MERN-Library-Management-System/assets/84215169/310c1789-2e1a-4607-bc62-96dfab6aa938)

![Home Page 3 (Footer)](https://github.com/malsha11/LibraHub-MERN-Library-Management-System/assets/84215169/f073d95f-eb01-410e-bf19-1d33dbbe21dc)


 **Add Book Page:**

![Add Book 1](https://github.com/malsha11/LibraHub-MERN-Library-Management-System/assets/84215169/09ed7135-55cd-4db6-9f8b-651822d79e2b)

![Add Book 2](https://github.com/malsha11/LibraHub-MERN-Library-Management-System/assets/84215169/6268b6ee-5db6-4f82-93ec-d701c8aa27ae)

 **List of Book Page:**

![List of Books](https://github.com/malsha11/LibraHub-MERN-Library-Management-System/assets/84215169/52aaa1a7-a46c-4951-b574-a1f094ee9fa9)

 **About Us Page:**

![About Us](https://github.com/malsha11/LibraHub-MERN-Library-Management-System/assets/84215169/f0e89875-dc13-41d1-9798-4bed0d12e2ef)


## API Endpoints

GET /api/books: Retrieve a list of all books.

GET /api/books/:id: Retrieve details of a specific book by ID.

POST /api/books: Add a new book to the collection.

PUT /api/books/:id: Update details of a specific book by ID.

DELETE /api/books/:id: Delete a specific book by ID.
