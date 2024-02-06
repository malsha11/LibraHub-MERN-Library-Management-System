import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import {
  Button,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    author: "",
    image: "",
    publicationYear: "",
    numberOfBooks: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        image: String(inputs.image),
        publicationYear: String(inputs.publicationYear),
        numberOfBooks: String(inputs.numberOfBooks),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={700}
        alignContent="center"
        alignSelf="center"
        marginLeft="auto"
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Publication Year</FormLabel>
        <TextField
          value={inputs.publicationYear}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="publicationYear"
        />
        <FormLabel>Number of Books</FormLabel>
        <TextField
          value={inputs.numberOfBooks}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="numberOfBooks"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <br></br>
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
      <Footer/>
    </form>
    
    
  );
};

export default AddBook;
