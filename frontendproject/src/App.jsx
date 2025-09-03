import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleBook from "./Pages/singleBook/singleBook";
import AddBook from "./Pages/addBook/addBook";
import EditBook from "./Pages/editBook/editBook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<SingleBook />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/editBook/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
