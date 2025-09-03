import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import axios from "axios";
const Home = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get(
      "https://mernbackend-1f51.onrender.com/book"
    );
    if (response.status === 200) {
      setBooks(response.data.data);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <Navbar />
      {books.length > 0 &&
        books.map((book) => {
          return <Card book={book} key={book._id} />;
        })}
    </>
  );
};

export default Home;
