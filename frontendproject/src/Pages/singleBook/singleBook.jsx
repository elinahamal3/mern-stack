import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../component/Navbar";

const singleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);

    if (response.status === 200) {
      setBook(response.data.data);
    }
  };
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete('http://localhost:3000/book/${id}');
      if (response.status === 200) {
        alert("Book deleted successfully");
        navigate("/"); // redirect to homepage
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Something went wrong while deleting the book");
    }
  };
  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <div className="bg-gray-100 p-8 sm:p-16 md:p-19 mt-25">
      <div className="container mx-auto">
        <img src={book.imageUrl} />
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-5">
          <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
            {book.bookName}
          </span>
          <span className="text-sm leading-normal text-gray-400 sm:block">
            {book.bookPrice}
          </span>
          <span className="text-sm leading-normal text-gray-400sm:block">
            {book.authorName}
          </span>
          <Link to={`/editBook/${book._id} `}>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-200">
              Edit
            </button>
            <button
                onClick={handleDelete}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition duration-200"
              >
                Delete
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
  x;
};

export default singleBook;
