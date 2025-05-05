// import TopBooks from "../Components/TopBooks";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import BrowseBooksSection from "../Components/BrowseBooksSection";
// import { useState } from "react";
/*
Discover Your Next Great Read

const quotes = [
  { quote: "A book is a dream that you hold in your hand.", author: "Neil Gaiman" },
  { quote: "Books are a uniquely portable magic.", author: "Stephen King" },
  { quote: "So many books, so little time.", author: "Frank Zappa" },
  { quote: "Reading is a discount ticket to everywhere.", author: "Mary Schmich" },
  { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" }

11005892
10590366
12725444
788564
11472796
];


*/

const Browse = () => {
  const searchBar = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  // const bookIds: number[] = [11005892, 10590366, 12725444, 788564, 11472796];
  // const romanticBookCoverIds: number[] = [
  //   10590366, 788564, 11005892, 12725444, 11472796,
  // ];

  // const [query, setQuery] = useState("");
  const changePage = () => {
    if (searchBar.current) {
      const bookName: string = searchBar.current.value;
      if (bookName == "") return;
      searchBar.current.value = "";
      navigate(`/book?q=${encodeURIComponent(bookName)}`);
    }
  };

  return (
    <div className="w-screen flex flex-col items-center p-[2em]">
      <h1 className="text-[2em] md:text-[3em] font-bold">
        DISCOVER YOUR NEXT GREAT READ
      </h1>
      {/* Search bar - now visible on all screens */}
      <div className="search flex w-full md:w-[50%] h-[6em] pt-[1em] pb-[1em] relative items-center">
        <input
          type="text"
          placeholder="Enter Book Name..."
          className="bg-gray-100 text-gray-700 p-2 px-4 rounded-[1em] 
          h-[3em]
          focus:outline-none w-full 
          placeholder:text-gray-500 transition-all duration-200
          "
          ref={searchBar}
        />
        <button
          className="absolute right-5 w-[2em] h-[2em] flex flex-col items-center justify-center opacity-40 hover:opacity-80 cursor-pointer active:opacity-40"
          onClick={changePage}
        >
          <FaSearch />
        </button>
      </div>
      <p className="font-thin italic text-[12px]">
        "A room without books is like a body without a soul" - Marcus Tullius
        Cicero
      </p>
      <BrowseBooksSection />{" "}
      {/* This will remain hidden on mobile as per your previous setup */}
    </div>
  );
};

export default Browse;
