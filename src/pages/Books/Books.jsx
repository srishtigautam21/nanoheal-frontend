import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Books = () => {
  //Outlet - To handle the child routes of book efficiently
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Books;
