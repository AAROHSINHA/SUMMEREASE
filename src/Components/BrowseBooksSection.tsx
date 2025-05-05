import { useState } from "react";
import BrowseBooksSectionBooks from "./BrowseBookSectionBooks";

const BrowseBooksSection = () => {
  const [category, setCategory] = useState("Fiction");
  return (
    <div className="hidden md:flex w-screen mt-[3em] mb-[3em] flex-col items-center font-sans">
      <h1 className="text-[2em] font-bold m-[12px]">BROWSE BY CATEGORIES</h1>

      <div className="selector w-[30%] p-[1em] flex justify-between text-gray-600">
        <div
          className={`${
            category === "Top-Books" ? "border-b-2 border-gray" : ""
          } hover:cursor-pointer p-[12px] pb-[2px]`}
          onClick={() => setCategory("Top-Books")}
        >
          <p>Top Rated</p>
        </div>
        <div
          className={`${
            category === "Fiction" ? "border-b-2 border-gray" : ""
          } hover:cursor-pointer p-[12px] pb-[2px]`}
          onClick={() => setCategory("Fiction")}
        >
          <p>Fiction</p>
        </div>
        <div
          className={`${
            category === "Sci-Fi" ? "border-b-2 border-gray" : ""
          } hover:cursor-pointer p-[12px] pb-[2px]`}
          onClick={() => setCategory("Sci-Fi")}
        >
          <p>Sci-Fi</p>
        </div>
      </div>

      <BrowseBooksSectionBooks query={category} />
    </div>
  );
};

export default BrowseBooksSection;
