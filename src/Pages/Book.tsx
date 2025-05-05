import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookDataContainer from "../Components/BookDataContainer";
import CompareBooks from "../Components/CompareBooks";

// Interfaces
interface BookData {
  title: string;
  author_name: string[];
  cover_i?: number;
  cover_edition_key?: string;
  first_publish_year?: number;
  key: string;
  language: string[];
  [key: string]: any;
}

const Book = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const navigate = useNavigate();

  const [bookData, setBookData] = useState<BookData | null>(null);
  const [bookMessage, setBookMessage] = useState("Loading book data...");

  useEffect(() => {
    const fetchBookData = async () => {
      if (query) {
        const bookDataRequest = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
        );
        console.log(`Fetching data from OpenLibrary: ${query}`);

        const data = await bookDataRequest.json();
        const dataDocsNeeded = data.docs[0];

        if (data.numFound === 0) {
          setBookMessage("SORRY! BOOK NOT FOUND");
          await new Promise((res) => setTimeout(res, 3000));
          navigate("/browse");
          return;
        }

        setBookData(dataDocsNeeded);
      }
    };

    fetchBookData();
  }, [query, navigate]);

  return (
    <div className="p-[5em] flex flex-col items-center">
      {!bookData ? (
        <div className="w-full h-[90vh] flex items-center justify-center text-2xl font-semibold text-gray-600">
          {bookMessage}
        </div>
      ) : (
        <BookDataContainer
          bookName={bookData.title}
          authorName={
            Array.isArray(bookData.author_name)
              ? bookData.author_name[0]
              : "Unknown"
          }
          bookPublishYear={bookData.first_publish_year || 0}
          bookCover_i={bookData.cover_i || 0}
          bookKey={bookData.key || ""}
        />
      )}

      <CompareBooks
        bookName={bookData?.title || ""}
        bookCover_i={bookData?.cover_i || 0}
      />
    </div>
  );
};

export default Book;
