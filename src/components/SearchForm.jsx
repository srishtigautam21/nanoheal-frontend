import React, { useState } from "react";
import { IconSearch } from "../images/images";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearch } from "../context/searchContext";

const SearchForm = () => {
  const { pathname } = useLocation();
  const { setSearchInput, setResultTitle, setAuthorSearchInput } = useSearch();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  // To check if input search is used for bookSearch or authorSearch
  let isAuthor = pathname === "/author" || pathname === "/author/authorlist";

  const handleSubmit = () => {
    let tempSearchTerm = input.trim();
    if (tempSearchTerm === "") {
      setSearchInput("");
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
    <div className='w-[90%] max-w-[500px] sm:w-full sm:max-w-[680px]'>
      <div className='py-[1rem] rounded-[2rem] px-[1.5rem] sm:py-[1.4rem] sm:rounded-[3rem] sm:px-[2.8rem] flex justify-between items-center bg-white mt-5 border-1'>
        <input
          type='text'
          className='text-[1rem] w-full outline-none'
          value={input}
          placeholder={"Search your favourite books/authors here"}
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
  );
};

export default SearchForm;
