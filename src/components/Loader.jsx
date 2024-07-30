import React from "react";
// import { CircularProgress } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import Book from "../images/Book.gif";

const Loader = () => {
  console.log("in loading....");
  return (
    <div className='flex items-center justify-center mt-3'>
      <img src={Book} alt='loading...' />
      <span className='ml-2'> loading...</span>
      {/* <Spinner size='md' color='default' /> */}
      {/* <CircularProgress size='md' aria-label='Loading...' /> */}
      {/* <CircularProgress size="lg" aria-label="Loading..."/> */}
    </div>
  );
};

export default Loader;
