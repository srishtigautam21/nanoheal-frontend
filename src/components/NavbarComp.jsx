import React, { useState } from "react";
import { IconClose, IconGripLines } from "../images/images";
import { Link } from "react-router-dom";
import books from "../images/books.png";

const NavbarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Books", "Author"];
  return (
    <div className='static flex items-center justify-between w-full p-2'>
      <div>
        <Link to='/' className='flex items-center justify-center'>
          <img src={books} alt='book-logo' className=' w-14' />
          <p className='font-bold text-[20px] ml-2'>BookGram</p>
        </Link>
      </div>
      <div className='hidden sm:flex sm:justify-between gap-4 sm:gap-7'>
        <Link color='foreground' to='/' className='font-semibold text-[20px]'>
          Books
        </Link>
        <Link
          to='/author'
          aria-current='page'
          className='font-semibold text-[20px]'
        >
          Authors
        </Link>
      </div>
      <div className='sm:hidden relative'>
        {isMenuOpen ? (
          <>
            <div className='hover:cursor-pointer'>
              <IconGripLines onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
            <div className='z-50 absolute top-6 right-1 bg-white p-3 flex flex-col gap-1 pt-6 border-1 rounded-md w-24 h-24'>
              {menuItems.map((item, index) => (
                <div key={`${item}-${index}`}>
                  <Link
                    color='primary'
                    className='w-full p-2 hover:bg-yellow-100'
                    to={index === 0 ? "/" : "/author"}
                  >
                    {item}
                  </Link>
                </div>
              ))}
              <IconClose
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='absolute top-2 right-2 hover:cursor-pointer'
              />
            </div>
          </>
        ) : (
          <div className='hover:cursor-pointer'>
            <IconGripLines onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarComp;
