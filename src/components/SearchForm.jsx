import React, { useRef, useEffect } from "react";
import { IconSearch } from "../images/images";
import { useNavigate, useLocation } from "react-router-dom";
// import { useGlobalContext } from '../../context.';

const SearchForm = () => {
  const { pathname } = useLocation();
  // const {setSearchTerm, setResultTitle} = useGlobalContext();
  // const searchText = useRef("");
  // const navigate = useNavigate();

  // useEffect(() => searchText.current.focus(), []);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let tempSearchTerm = searchText.current.value.trim();
  //   if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
  //     setSearchTerm("the lost world");
  //     setResultTitle("Please Enter Something ...");
  //   } else {
  //     setSearchTerm(searchText.current.value);
  //   }

  //   navigate("/book");
  // };

  return (
    <div className='w-full max-w-[680px]'>
      <div className='container'>
        <div className='search-form-content'>
          {/* onSubmit={handleSubmit} */}
          <form className='search-form'>
            <div className='py-[1.4rem] rounded-[3rem] px-[2.8rem] flex justify-between items-center bg-white mt-5 border-1'>
              {/* ref = {searchText} */}
              <input
                type='text'
                className='text-[1rem] w-full outline-none'
                placeholder={
                  pathname === "/author"
                    ? "Search your favourite authors here"
                    : "Search your fav books..."
                }
                autoFocus
              />
              {/* onClick={handleSubmit} */}
              <button type='submit' className='flex flex-c'>
                <IconSearch className='text-slate-700 text-[1.5rem]' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
