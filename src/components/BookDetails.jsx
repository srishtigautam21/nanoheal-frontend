import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import coverImg from "../images/coverImg.jpg";
import { IconArrowLeft } from "../images/images";

// const URL = "http://localhost:5000/book/bookdetail";
const URL = `https://nanoheal-backend.vercel.app/book/bookdetail`;
const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  const getBookDetails = async () => {
    try {
      const response = await fetch(`${URL}?bookId=${id}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        const {
          description,
          title,
          covers,
          subject_places,
          subject_times,
          subjects,
        } = data;
        const bookDetail = {
          description: description ? description.value : "No description found",
          title: title,
          cover_img: covers
            ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
            : coverImg,
          subject_places: subject_places
            ? subject_places.join(", ")
            : "No subject places found",
          subject_times: subject_times
            ? subject_times.join(", ")
            : "No subject times found",
          subjects: subjects ? subjects.join(", ") : "No subjects found",
        };
        setBook(bookDetail);
      } else {
        setBook(null);
      }
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getBookDetails();
  }, [id]);
  console.log(book);

  console.log(book);

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
              src={book?.cover_img}
              alt='cover img'
              className=' max-w-[220px] md:max-h-[500px] md:max-w-[350px] w-[100%] object-cover'
            />
          </div>
          <div className='  max-h-[600px] px-4'>
            <div className=' mb-5 text-bold text-[20px]'>
              <span className='font-semibold text-[24px]'>{book?.title}</span>
            </div>
            <div className='mb-5 opacity-80'>
              <span>{book?.description}</span>
            </div>
            <div className='mb-5'>
              <span className='font-semibold'>Subject Places: </span>
              <span className='text-[italic]'>{book?.subject_places}</span>
            </div>
            <div className='mb-5'>
              <span className='font-semibold'>Subject Times: </span>
              <span className='text-[italic]'>{book?.subject_times}</span>
            </div>
            <div className='mb-5'>
              <span className='font-semibold'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
