import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
//This url returns an array of objects containing data such title, authorname etc.
const URL = `https://nanoheal-backend.vercel.app/book/bookSearch`;
//This Url returns an array of objects containg author data such as name date_of_birth etc.
const AUTHOR_URL = `https://nanoheal-backend.vercel.app/author/authorSearch`;

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultTitle, setResultTitle] = useState("");
  const [authors, setAuthors] = useState([]);
  const [authorSearchInput, setAuthorSearchInput] = useState("");

  const getBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}?bookName=${searchInput}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const { docs } = data;
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

  const getAuthors = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${AUTHOR_URL}?authorName=${authorSearchInput}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const { docs } = data;
      if (docs) {
        let newAuthor = docs.map((singleAuthor) => {
          const { key, name, top_subjects, top_work, work_count } =
            singleAuthor;
          return {
            id: key,
            name: name,
            subjects: top_subjects,
            top_work: top_work,
            work_count: work_count,
          };
        });
        setAuthors(newAuthor);
        if (newAuthor.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search result found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search result found!");
      }

      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }, [authorSearchInput]);

  useEffect(() => {
    if (authorSearchInput) {
      getAuthors();
    } else if (searchInput) {
      getBooks();
    }
  }, [getBooks, searchInput, authorSearchInput]);

  return (
    <SearchContext.Provider
      value={{
        loading,
        searchInput,
        setSearchInput,
        resultTitle,
        setResultTitle,
        books,
        authorSearchInput,
        setAuthorSearchInput,
        authors,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };
