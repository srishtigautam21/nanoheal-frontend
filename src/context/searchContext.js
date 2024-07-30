import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";

const URL = "https://openlibrary.org/search.json?title=";

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  // the lost world
  const [searchInput, setSearchInput] = useState("da vinci code");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const getBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchInput}&limit=20`);
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };
