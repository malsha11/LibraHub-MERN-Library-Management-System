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
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        image: String(inputs.image),
        publicationYear: String(inputs.publicationYear),
        numberOfBooks: String(inputs.numberOfBooks),
      });
      return res.data;
    } catch (error) {
      console.error("Error adding book:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      if (!Object.values(inputs).every((value) => value.trim())) {
        setErrorMessage("Please fill in all fields.");
        return;
      }
      await sendRequest();
      setSuccessMessage("Book added successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        history("/books");
      }, 2000);
    } catch (error) {
      console.error("Error adding book:", error);
    }
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
        <br />
        <Button variant="contained" type="submit">
          Add Book
        </Button>
        {errorMessage && (
          <Typography variant="body1" color="error" align="center">
            {errorMessage}
          </Typography>
        )}
        {successMessage && (
          <Typography variant="body1" color="success" align="center">
            {successMessage}
          </Typography>
        )}
      </Box>
      <Footer />
    </form>
  );
};

export default AddBook;
