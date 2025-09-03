import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  // const navigate = useNavigate();
  return (
    <div className="bg-gray-100 p-4 sm:p-8 md:p-16 mt-20">
      <div className="container mx-auto">
        <img src={book.imageUrl} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
            {book.bookName}
          </span>
          <span className="text-sm leading-normal text-gray-400 sm:block">
            {book.bookPrice}
          </span>
          <span className="text-sm leading-normal text-gray-400 sm:block">
            {book.authorName}
          </span>
          <div className="See">
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Link to={`/book/${book._id}`}>See more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
