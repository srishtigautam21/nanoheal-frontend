import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname === "/author", typeof pathname);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Header</h1>
        <p>nndj ikdfoj iodfj io</p>
        <SearchForm />
      </div>
    </div>
  );
};

export default Header;
