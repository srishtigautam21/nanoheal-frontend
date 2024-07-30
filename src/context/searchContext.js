import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";

// const URL = `http://localhost:5000/book/bookSearch`;
const URL = `https://nanoheal-backend.vercel.app/book/bookSearch`;

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultTitle, setResultTitle] = useState("");

  const getBooks = useCallback(async () => {
    setLoading(true);
    try {
      // const query = {
      //   bookName: searchInput,
      // };
      // const options = {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   params: query,
      // };
      const response = await fetch(`${URL}?bookName=${searchInput}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // params: query,
        // params: searchInput,
      });
      const data = await response.json();
      const { docs } = data;
      console.log(docs);
      if (docs) {
        const newBooks = docs.map((book) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = book;
          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        setBooks(newBooks);
        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search result found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search result found!");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [searchInput]);

  useEffect(() => {
    getBooks();
  }, [getBooks, searchInput]);
  return (
    <SearchContext.Provider
      value={{
        loading,
        searchInput,
        setSearchInput,
        resultTitle,
        setResultTitle,
        books,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };
