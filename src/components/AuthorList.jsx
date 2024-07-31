import React from "react";
import { useSearch } from "../context/searchContext";
import Loader from "./Loader";
import authorImg from "../images/author-photo-not-found.jpg";
import AuthorCard from "./AuthorCard";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const AuthorList = () => {
  const { authors, loading, resultTitle } = useSearch();
  console.log(loading);
  const authorCovers = authors.map((singleAuthor) => {
    // 14614017
    return {
      ...singleAuthor,
      cover_img: singleAuthor.id
        ? `https://covers.openlibrary.org/a/olid/${singleAuthor.id}-L.jpg`
        : authorImg,
      //OL2833586A
    };
  });
  console.log(authorCovers, "bhbgiu");
  if (loading) return <Loader />;
  return (
    <div className='py-[3rem] bg-[#f8f9fa]'>
      <div className='max-w-[1200px] m-[0 auto] px-[2rem]'>
        <div className='font-semibold pt-[18px] pb-[24px]'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='grid  gap-5 md:gap-12 sm:grid-cols-2  md:grid-cols-3'>
          {authorCovers.map((item, index) => {
            return <AuthorCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
    // <div class>
    //   {

    //     books?.map((singleBook) => {
    //       const {
    //         id,
    //         author,
    //         cover_id,
    //         edition_count,
    //         first_publish_year,
    //         title,
    //       } = singleBook;
    //       return (
    //         <div key={id}>
    //           <img src={bookCovers} alt='bookcover' />
    //           <div>{author}</div>
    //           <div>{title}</div>
    //         </div>
    //       );
    //     })
    //   }
    // </div>
  );
};

export default AuthorList;
