import React, { useRef, useEffect, useState } from "react";
import { IconSearch } from "../images/images";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearch } from "../context/searchContext";

const SearchForm = () => {
  const { pathname } = useLocation();
  const { setSearchInput, setResultTitle, setAuthorSearchInput } = useSearch();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  let isAuthor = pathname === "/author" || pathname === "/author/authorlist";

  const handleSubmit = () => {
    let tempSearchTerm = input.trim();
    // tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0
    if (tempSearchTerm === "") {
      // setSearchInput("da vinci code");
      setSearchInput("");
      console.log("bcjwkcj");
      setResultTitle("Please Enter Something ...");
    } else if (isAuthor) {
      setAuthorSearchInput(input);
      navigate("/author/authorlist");
    } else {
      setSearchInput(input);
      navigate("/book");
    }

    setInput("");
  };

  return (
    <div className='w-full max-w-[680px]'>
      <div className='container'>
        <div className='search-form-content'>
          <div className='py-[1.4rem] rounded-[3rem] px-[2.8rem] flex justify-between items-center bg-white mt-5 border-1'>
            <input
              type='text'
              className='text-[1rem] w-full outline-none'
              value={input}
              placeholder={
                // isAuthor
                //   ? "Search your favourite books/authors here"
                //   : "Search your fav books..."
                "Search your favourite books/authors here"
              }
              onKeyDown={(e) => {
                e.key === "Enter" && handleSubmit();
              }}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />

            <button
              type='submit'
              className='flex flex-c'
              onClick={() => handleSubmit()}
            >
              <IconSearch className='text-slate-700 text-[1.5rem]' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
