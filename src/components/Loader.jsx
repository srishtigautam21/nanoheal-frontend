import React from "react";
import Book from "../images/Book.gif";

const Loader = () => {
  return (
    <div className='flex items-center justify-center mt-3'>
      <img src={Book} alt='loading...' />
      <span className='ml-2'> loading...</span>
    </div>
  );
};

export default Loader;
