import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Books = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Books;
