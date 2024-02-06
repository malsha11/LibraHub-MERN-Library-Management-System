// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import WelcomeBox from "../components/WelcomeBox";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/books");
        setBooks(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div id="home">
      <WelcomeBox />
      <div>
        <ul className="book-list">
          {books.map((book) => (
            <li key={book._id}>
              {/* Update the Link component here */}
              <Link to={`/book/${book._id}`} className="book-link">
                <div className="card">
                  <img src={book.image} alt={book.name} />
                  <article>
                    <h3>{book.name}</h3>
                    <p className="no-underline">Author: {book.author}</p>
                    <p className="no-underline">Description: {book.description}</p>
                    <p className="no-underline">Publication Year: {book.publicationYear}</p>
                    <p className="no-underline">Number of Books: {book.numberOfBooks}</p>
                  </article>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
