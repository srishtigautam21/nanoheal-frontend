import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Author = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Author;
