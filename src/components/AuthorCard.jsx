import React from "react";
import { Link } from "react-router-dom";
import authorImg from "../images/author-photo-not-found.jpg";
import { useImageSize } from "react-image-size";

const AuthorCard = (author) => {
  console.log(author, "author-info");

  const [dimensions] = useImageSize(author.cover_img);
  let width = dimensions?.width;
  let height = dimensions?.height;
  console.log(width, height, "img");
  let imgAvailable = width > 1 && height > 1;
  console.log(imgAvailable, "img available");

  return (
    <div className='px-[1rem] py-[2rem] rounded-md bg-white shadow-lg flex flex-col justify-between hover:shadow-2xl'>
      <Link to={`/author/authorlist/${author.id}`} {...author}>
        <div>
          <img
            src={imgAvailable ? author?.cover_img : authorImg}
            alt='cover'
            className='max-w-[100px] md:max-w-[180px] mr-auto ml-auto '
          />
        </div>
        <div className='mt-[2rem] text-center'>
          {/* <Link to={`/author/${author.id}`} {...author}> */}
          <div className='leading-[1.4] mb-[0.8rem] font-bold text-[18px]'>
            <span>{author?.name}</span>
          </div>
          {/* </Link> */}

          <div className='leading-[1.4] mb-[4px] text-[15px]'>
            <span className='font-bold'>Top work: </span>
            <span>{author?.top_work}</span>
          </div>

          <div className=' opacity-80 text-[15px]'>
            <span className='font-bold'>Writes about: </span>
            <span>{author?.subjects?.slice(0, 2).join(", ")}</span>
          </div>

          <div className='opacity-60 font-[italics] text-[14px] fs-15'>
            <span className='font-bold mt-2'>Work count: </span>
            <span>{author?.work_count}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AuthorCard;
