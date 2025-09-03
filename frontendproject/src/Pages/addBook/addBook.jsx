import React, { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const addBook = () => {
  // const [bookName, setBookName] = useState("");
  // const [bookPrice, setBookPrice] = useState("");
  // const [isbnNumber, setisbnNumber] = useState(null);
  // const [authorName, setauthorName] = useState("");
  // const [publishedAt, setpublishedAt] = useState("");
  // const [publication, setPublication] = useState("");
  // const [image, setImage] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await axios.post(
  //     "http://localhost:3000/book",
  //     {
  //       bookName,
  //       bookPrice,
  //       isbnNumber,
  //       authorName,
  //       publishedAt,
  //       publication,
  //       image,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     }
  //   );
  // };
  const navigate = useNavigate();
  const [data, setData] = useState({
    bookName: "",
    bookPrice: "",
    isbnNumber: null,
    authorName: "",
    publishedAt: "",
    publication: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("image", image);

    const response = await axios.post("http://localhost:3000/book", formData);
    if (response.status === 201) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            📚 Add New Book
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="bookName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Book Name
              </label>
              <input
                type="text"
                id="bookName"
                name="bookName"
                placeholder="Enter book name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                // onChange={(e) => setBookName(e.target.value)}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="bookPrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                bookPrice
              </label>
              <input
                type="number"
                id="bookPrice"
                name="bookPrice"
                placeholder="Enter price"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                // onChange={(e) => setBookPrice(e.target.value)}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="isbnNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                isbnNumber
              </label>
              <input
                type="number"
                id="isbnNumber"
                name="isbnNumber"
                placeholder="Enter ISBN number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                // onChange={(e) => setisbnNumber(e.target.value)}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="authorName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                authorName
              </label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                placeholder="Enter author name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                // onChange={(e) => setauthorName(e.target.value)}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="publication"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                publication
              </label>
              <input
                type="number"
                id="publication"
                name="publication"
                placeholder="e.g. 2024"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                // onChange={(e) => setPublication(e.target.value)}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="publishedAt"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                publishedAt
              </label>
              <input
                type="date"
                id="publishedAt"
                name="publishedAt"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                // onChange={(e) => setpublishedAt(e.target.value)}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="bookImage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Book Image
              </label>
              <input
                type="file"
                id="bookImage"
                name="image"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              ➕ Add Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default addBook;
