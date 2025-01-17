import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Books from "./pages/Books/Books";
import Author from "./pages/Author/Author";
import BookDetails from "./components/BookDetails";
import AuthorDetails from "./components/AuthorDetails";
import BookList from "./components/BookList";
import AuthorList from "./components/AuthorList";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Books />}>
          <Route path='book' element={<BookList />} />
          <Route path='/book/:id' element={<BookDetails />} />
        </Route>

        <Route path='/author' element={<Author />}>
          <Route path='authorlist' element={<AuthorList />} />
          <Route path='/author/authorlist/:id' element={<AuthorDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
