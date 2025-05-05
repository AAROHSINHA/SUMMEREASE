import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import BrowseBooksGrid from "./BrowseBooksGrid";

interface browseProp {
  query: string;
}

const BrowseBooksSectionBooks: FC<browseProp> = ({ query }) => {
  const [TopBooks, setTopBooks] = useState([]);
  const [FictionBooks, setFictionBooks] = useState([]);
  const [sciFiBooks, setSciFiBooks] = useState([]);
  const fictionParam = [
    "https://openlibrary.org/subjects/fiction.json?published_in=2005-2025",
    "Fiction",
  ];

  const scifiParam = [
    "https://openlibrary.org/subjects/science_fiction.json?published_in=2005-2025",
    "Sci-Fi",
  ];

  const topParam = [
    "https://openlibrary.org/subjects/popular.json?published_in=2005-2025",
    "Top-Rated",
  ];

  // helper function
  const setData = (path: string, name: string) => {
    const request = fetch(path);
    request
      .then((data) => {
        const dataJson = data.json();
        dataJson
          .then((finalData) => {
            if (finalData?.works) {
              console.log(finalData.works);
              const finalDataWorks = finalData.works.sort(
                () => 0.5 - Math.random()
              );
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
    <div className="w-[80%] mt-[2em] mb-[2em]">
      {query === "Top-Books" && <BrowseBooksGrid data={TopBooks} />}
      {query === "Fiction" && <BrowseBooksGrid data={FictionBooks} />}
      {query === "Sci-Fi" && <BrowseBooksGrid data={sciFiBooks} />}
    </div>
  );
};

export default BrowseBooksSectionBooks;
