import React from "react";
import { useSearch } from "../context/searchContext";
import Loader from "./Loader";
import coverImg from "../images/coverImg.jpg";
import BookCard from "./BookCard";

const BookList = () => {
  const { books, loading, resultTitle } = useSearch();
  const bookCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // replacing /works/ to get id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loader />;
  return (
    <section className='py-[3rem] bg-[#f8f9fa]'>
      <div className='max-w-[1200px] m-[0 auto] px-[2rem]'>
        <div className='font-semibold pt-[18px] pb-[24px]'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='grid  gap-5 md:gap-12 sm:grid-cols-2  md:grid-cols-3'>
          {bookCovers.slice(0, 20).map((item, index) => {
            return <BookCard key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
