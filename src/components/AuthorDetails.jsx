import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import authorImg from "../images/author-photo-not-found.jpg";
import { IconArrowLeft } from "../images/images";
import { useImageSize } from "react-image-size";

// const URL = "http://localhost:5000/book/bookdetail";
// const URL = `https://nanoheal-backend.vercel.app/book/bookdetail`;
// const URL = `https://openlibrary.org/authors/`;
const URL = "https://nanoheal-backend.vercel.app/author/authordetail";
// const WORKS_URL = `https://openlibrary.org/authors/`;

const AuthorDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState(null);
  const navigate = useNavigate();
  const [dimensions] = useImageSize(
    `https://covers.openlibrary.org/a/olid/${id}-L.jpg`
  );
  let width = dimensions?.width;
  let height = dimensions?.height;
  console.log(width, height, "img");
  let imgAvailable = width > 1 && height > 1;

  const getAuthorDetails = async () => {
    try {
      const response = await fetch(`${URL}?authorId=${id}`);
      const authorData = await response.json();
      // const workResponse = await fetch(`${URL}?authorId=${id}`);
      // const workData = await workResponse.json();
      // if(workData){
      //   workData?.entries
      //             ? workData?.entries.map((work) => {
      //                 return <li className='list-decimal'>{work.title}</li>;
      //               })
      // }
      console.log(authorData, "data");
      if (authorData) {
        const { data, workData } = authorData;
        const { bio, name, birth_date, death_date } = data;

        console.log("inside if data");
        const authorDetail = {
          bio:
            typeof bio !== "object"
              ? bio
              : bio.value
              ? bio.value
              : "No Bio found",
          name: name,
          cover_img: imgAvailable
            ? `https://covers.openlibrary.org/a/olid/${id}-L.jpg`
            : authorImg,
          birth_date: birth_date ? birth_date : "No birth date found",
          death_date: death_date ? death_date : "No date of death found",
          works: workData?.entries ? workData?.entries : "No work found",
        };
        setAuthor(authorDetail);
      } else {
        setAuthor(null);
      }
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getAuthorDetails();
  }, [id]);

  console.log(author, "uiop 50");

  if (loading) return <Loader />;

  return (
    <div className='p-[2rem]'>
      <div className='max-w-[1200px] px-[1rem]'>
        <button
          type='button'
          className='flex items-center justify-center ml-5 mb-6 hover:text-purpleColor'
          onClick={() => navigate(-1)}
        >
          <IconArrowLeft size={22} />
          <span className='text-[18px] font-semibold ml-4'>Go Back</span>
        </button>

        <div className='grid md:grid-cols-[40%,60%] gap-9 mr-auto ml-auto'>
          <div className='overflow-hidden ml-auto mr-auto'>
            <img
              src={author?.cover_img}
              alt='cover img'
              className=' max-w-[220px] md:max-h-[500px] md:max-w-[350px] w-[100%] object-cover'
            />
          </div>
          <div className='  max-h-[600px] px-4'>
            <div className=' mb-5 text-bold text-[20px]'>
              <span className='font-semibold text-[24px]'>{author?.name}</span>
            </div>
            <div className='mb-5 opacity-80'>
              <span>{author?.bio}</span>
            </div>
            <div className='mb-5'>
              <span className='font-semibold'>Birth Date: </span>
              <span className='text-[italic]'>{author?.birth_date}</span>
            </div>
            <div className='mb-5'>
              <span className='font-semibold'>Death date: </span>
              <span className='text-[italic]'>{author?.death_date}</span>
            </div>
            <div className='mb-5'>
              <span className='font-semibold'>Some of writer's top work: </span>
              <ul className='pl-5 opacity-80 py-3'>
                {author?.works?.map((work, index) => {
                  return (
                    <li className=' list-disc' key={index}>
                      {work.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
