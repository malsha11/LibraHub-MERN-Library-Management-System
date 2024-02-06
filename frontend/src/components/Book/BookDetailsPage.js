// BookDetailsPage.js
import React from "react";

const BookDetailsPage = ({ match }) => {
  // Check if match exists before accessing params
  if (!match || !match.params || !match.params.id) {
    // Handle the case where match.params.id is undefined
    return <div>Invalid book ID</div>;
  }

  // Retrieve the book ID from the URL
  const bookId = match.params.id;

  // Fetch book details using the bookId, or you can use the book data passed through props from Home component

  return (
    <div>
      <h2>Book Details Page</h2>
      <p>Book ID: {bookId}</p>
      {/* Render other details of the book here */}
    </div>
  );
};

export default BookDetailsPage;
