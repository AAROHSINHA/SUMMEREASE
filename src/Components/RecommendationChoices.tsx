import { useState } from "react";
import { FC } from "react";

interface recProp {
  onSelect: (val: string[]) => void;
  selectedElements: string[];
}

const RecommendationChoices: FC<recProp> = ({ onSelect, selectedElements }) => {
  const genres = [
    "Fantasy",
    "Fiction",
    "Romance",
    "Thriller",
    "Non-Fiction",
    "Sci-fi",
    "Young Adult",
    "Biography",
  ];
  const moods = [
    "Easy To Read",
    "Heart-Warming",
    "Dark and Gripping",
    "Philosophical",
    "Character Driven",
    "Story Focused",
    "Humor Rich",
    "Slowly Paced",
    "Slow Burn",
  ];
  //bg-[#fff6a6]
  const [selectedChoices, setSelectedChoices] = useState<string[]>([]);
  return (
    <div className="w-[100%] h-auto md:h-[40vh] flex flex-col md:flex-row p-[1em] md:p-[2em] mt-[1em]">
      {/* Genre Section - Full width on mobile, half on desktop */}
      <div className="genre md:border-r-1 border-solid w-full md:w-[50%] mb-4 md:mb-0">
        <h1 className="text-[1.2em] md:text-[1.4em] font-bold text-center underline italic">
          SELECT BY GENRE
        </h1>
        <div className="m-[8px] md:m-[12px] grid grid-cols-2 md:grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-2 pl-[0.5em] pr-[0.5em] md:pl-[1em] md:pr-[1em]">
          {genres.map((element, index) => (
            <div
              key={index}
              className={`h-[2em] font-sans font-thin text-center rounded-[0.7em] flex items-center justify-center tracking-[1px] md:tracking-[2px] cursor-pointer transition delay-0 ease-in-out duration-300 
                ${
                  selectedChoices.includes(element)
                    ? "bg-green-200"
                    : "bg-gray-100"
                } 
                hover:opacity-80 text-[0.9em] md:text-[1em]`}
              onClick={() => {
                setSelectedChoices((prevChoices) => [...prevChoices, element]);
                onSelect([...selectedElements, element]);
              }}
            >
              <p>{element}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mood Section - Full width on mobile, half on desktop */}
      <div className="mood w-full md:w-[50%]">
        <h1 className="text-[1.2em] md:text-[1.4em] font-bold text-center underline italic">
          SELECT BY MOOD
        </h1>
        <div className="m-[8px] md:m-[12px] grid grid-cols-2 md:grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-2 pl-[0.5em] pr-[0.5em] md:pl-[1em] md:pr-[1em]">
          {moods.map((element, index) => (
            <div
              key={index}
              className={`h-[2em] font-sans font-thin text-center rounded-[0.7em] flex items-center justify-center tracking-[1px] md:tracking-[2px] cursor-pointer transition delay-0 ease-in-out duration-300 
                ${
                  selectedChoices.includes(element)
                    ? "bg-green-100"
                    : "bg-gray-100"
                } 
                hover:opacity-80 text-[0.9em] md:text-[1em]`}
              onClick={() => {
                setSelectedChoices((prevChoices) => [...prevChoices, element]);
                onSelect([...selectedElements, element]);
              }}
            >
              <p>{element}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationChoices;
