import React from "react";
import { useLocation } from "react-router-dom";
import NavbarComp from "./NavbarComp";
import SearchForm from "./SearchForm";

const Header = () => {
  const { pathname } = useLocation();
  let isAuthor = pathname === "/author" || pathname === "/author/authorlist";

  return (
    <div>
      <div className='p-3  border-b-1'>
        <NavbarComp />
      </div>
      <div className='flex flex-col items-center justify-center min-h-[90vh]  bg-no-repeat bg-cover bg-library opacity-90'>
        <h1 className='font-poppins text-center text-slate-700 font-bold text-[25px] sm:text-[40px]'>
          Find your fav Books & Authors
        </h1>

        <SearchForm />
      </div>
    </div>
  );
};

export default Header;
