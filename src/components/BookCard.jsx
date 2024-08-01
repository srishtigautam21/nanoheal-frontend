import React from "react";
import { Link } from "react-router-dom";

const BookCard = (book) => {
  return (
    <div className='px-[1rem] py-[2rem] rounded-md bg-white shadow-lg flex flex-col justify-between hover:shadow-2xl'>
      <Link to={`/book/${book.id}`} {...book}>
        <div>
          <img
            src={book.cover_img}
            alt='cover'
            className='max-w-[100px] md:max-w-[180px] mr-auto ml-auto '
          />
        </div>
        <div className='mt-[2rem] text-center'>
          <div className='leading-[1.4] mb-[0.8rem] font-bold text-[18px]'>
            <span>{book.title}</span>
          </div>
          <div className='leading-[1.4] mb-[4px] text-[15px]'>
            <span className='font-bold'>Author: </span>
            <span>{[book.author].join(", ").toUpperCase()}</span>
          </div>

          <div className=' opacity-80 text-[15px]'>
            <span className='font-bold'>Total Editions: </span>
            <span>{book.edition_count}</span>
          </div>

          <div className='opacity-60 font-[italics] text-[14px] fs-15'>
            <span className='font-bold'>First Publish Year: </span>
            <span>{book.first_publish_year}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
