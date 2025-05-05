import { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface recProp {
  title: string;
}

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

const RecommendedBook: FC<recProp> = ({ title }) => {
  //   const [bookMessage, setBookMessage] = useState("");
  const [bookData, setBookData] = useState<BookData | null>(null);
  const navigate = useNavigate();
  // we need to generate the data from api
  useEffect(() => {
    if (title) {
      //   setBookName(decodeURIComponent(query));
      const bookDataRequest = fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}`
      );
      bookDataRequest.then((BookData_fetchedResult) => {
        BookData_fetchedResult.json().then(async (data) => {
          const dataDocsNeeded = data.docs[0];
          if (data.numFound == 0) {
            // setBookMessage("SORRY! BOOK NOT FOUND");
            return;
          }
          setBookData(dataDocsNeeded);
        });
      });
    }
  }, []);

  const handleClick = () => {
    navigate(`/book?q=${encodeURIComponent(title)}`);
  };

  return (
    <div
      className="w-[23em] h-[32em] flex flex-col items-center justify-around 
    hover:scale-110 transition-transform duration-200 ease-in-out
    hover:cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={
          bookData?.cover_i
            ? `https://covers.openlibrary.org/b/id/${bookData.cover_i}-L.jpg`
            : `loading...`
        }
        alt=""
        className="w-[80%] h-[80%]"
      />
      <h1 className="font-bold text-[1em]">
        <p className="w-[100%] italic text-center">{title} </p>
      </h1>
    </div>
  );
};

export default RecommendedBook;
