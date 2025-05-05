import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import BrowseBooksGrid from "./BrowseBooksGrid";

interface browseProp {
  query: string;
}
interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail: string;
    };
  };
}

const BrowseBooksSectionBooks: FC<browseProp> = ({ query }) => {
  const [TopBooks, setTopBooks] = useState<Book[]>([]);
  const [FictionBooks, setFictionBooks] = useState<Book[]>([]);
  const [sciFiBooks, setSciFiBooks] = useState<Book[]>([]);
  const fictionParam = [
    "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=relevance&printType=books&maxResults=20",
    "Fiction",
  ];

  const scifiParam = [
    "https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&orderBy=relevance&printType=books&maxResults=20",
    "Sci-Fi",
  ];

  const topParam = [
    "https://www.googleapis.com/books/v1/volumes?q=subject:science%20fiction&orderBy=relevance&printType=books&maxResults=20",
    "Top-Rated",
  ];

  // helper function
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const setData = (path: string, name: string) => {
    const request = fetch(path);
    request
      .then((data) => {
        const dataJson = data.json();
        dataJson
          .then((finalData) => {
            if (finalData?.items) {
              console.log(finalData.items);
              const finalDataWorks = shuffleArray(finalData.items);
              if (name == "Fiction")
                setFictionBooks(finalDataWorks.slice(0, 5));
              else if (name == "Sci-Fi")
                setSciFiBooks(finalDataWorks.slice(0, 5));
              else if (name == "Top-Rated")
                setTopBooks(finalDataWorks.slice(0, 5));
            }
          })
          .catch((error) => {
            console.log("Error in json thing - ", error);
          });
      })
      .catch((error) => {
        console.log("Error in Main thing - ", error);
      });
  };

  useEffect(() => {
    // 1. fiction books
    setData(fictionParam[0], fictionParam[1]);
    setData(scifiParam[0], scifiParam[1]);
    setData(topParam[0], topParam[1]);
  }, []);

  // we dont want to change this on query

  return (
    <div className="hidden md:block w-[80%] mt-[2em] mb-[2em]">
      {query === "Top-Books" && <BrowseBooksGrid data={TopBooks} />}
      {query === "Fiction" && <BrowseBooksGrid data={FictionBooks} />}
      {query === "Sci-Fi" && <BrowseBooksGrid data={sciFiBooks} />}
    </div>
  );
};

export default BrowseBooksSectionBooks;
