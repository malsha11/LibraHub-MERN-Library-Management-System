import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
import Footer from "../Footer";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, publicationYear, numberOfBooks, image } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <article>By {author}</article>
      <p>{description}</p> 
      <h5>Year : {publicationYear}</h5>
      <h4>No Items: {numberOfBooks}</h4>
      <br></br>
      <div>
      <Button
        component={Link}
        to={`/books/${_id}`}
        variant="contained"
        className="update-button" // Add this class for update button styling
      >
        Update
      </Button>

      <Button
        variant="contained"
        className="delete-button" // Add this class for delete button styling
        onClick={deleteHandler}
      >
        Delete
      </Button>
      
      </div>
    
    </div>
    
  );
};

export default Book;
