import React from "react";
import { useLocation } from "react-router-dom";
import NavbarComp from "./NavbarComp";
import SearchForm from "./SearchForm";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname === "/author", typeof pathname);

  return (
    <div>
      <div className='p-3  border-b-1'>
        <NavbarComp />
      </div>
      {/* bg-gradient-to-r from-purple-500 to-pink-500 */}
      <div className='flex flex-col items-center justify-center min-h-[90vh]  bg-no-repeat bg-cover bg-library opacity-90'>
        <h1 className='font-poppins text-center text-slate-700 font-bold text-[40px]'>
          Find the book of your choice
        </h1>

        {/* <p className='text-center'>nndj ikdfoj iodfj io</p> */}
        <SearchForm />
      </div>
    </div>
  );
};

export default Header;
