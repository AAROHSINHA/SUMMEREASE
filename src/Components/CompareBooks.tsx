import { FC } from "react";
import CompareResult from "./CompareResult";
import { useState } from "react";
import { useRef } from "react";

/* 
Given the following user preferences:

Pacing: Medium
Length: Long
Style: Character-driven

Please compare the following books and recommend the one that best suits these criteria:

Eragon by Christopher Paolini
Harry Potter by J.K. Rowling
Percy Jackson by Rick Riordan

Provide a brief explanation (50 words) of why the recommended book fits the user's preferences, and separate the book title and explanation with %%.
*/

interface propType {
  bookName: string | undefined;
  bookCover_i: number | undefined;
}

const CompareBooks: FC<propType> = ({ bookName, bookCover_i }) => {
  const book1 = useRef<HTMLInputElement>(null);
  const book2 = useRef<HTMLInputElement>(null);
  const book3 = useRef<HTMLInputElement>(null);
  const pacing = useRef<HTMLSelectElement>(null);
  const length = useRef<HTMLSelectElement>(null);
  const style = useRef<HTMLSelectElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null); // State for error messages
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [result, setResult] = useState("");
  const fallbackSummaries = [
    `${bookName}%%The book you’ve chosen stands out as a solid pick! With its reputation and overall appeal, we believe it's well worth your time and attention.`,
    `${bookName}%%This book checks all the right boxes and aligns with many popular interests. A fantastic addition to your reading list!`,
    `${bookName}%%Highly regarded and frequently recommended, this title could be exactly what you’re looking for. Don't miss out on giving it a read!`,
    `${bookName}%%Whether you're exploring something new or diving deeper into a topic, this book is a reliable choice. Definitely worth considering!`,
    `${bookName}%%Smartly written and widely appreciated, this book has something for everyone. We think you’ll really enjoy the journey it offers.`,
    `${bookName}%%A great companion for thoughtful readers, this book fits well with many reading goals and interests. Give it a try!`,
    `${bookName}%%This title has earned praise for good reason. Engaging, impactful, and worthwhile — it could be your next favorite read.`,
    `${bookName}%%Backed by reader approval and strong presence, this book makes a confident addition to your personal collection.`,
    `${bookName}%%We believe this book aligns well with your interests and curiosity. It’s got the spark — why not explore it further?`,
    `${bookName}%%If you're looking for something meaningful and enjoyable, this book is an excellent choice. It’s highly recommended by many.`,
  ];

  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));
  const handleCompareResult = async () => {
    try {
      setIsLoading(true); // Set loading state to true
      const bookName1 = book1.current ? book1.current.value : bookName;
      const bookName2 = book2.current ? book2.current.value : bookName;
      const bookName3 = book3.current ? book3.current.value : bookName;
      const pacingValue = pacing.current ? pacing.current.value : "Slow";
      const lengthValue = length.current ? length.current.value : "Long";
      const styleValue = style.current
        ? style.current.value
        : "Easy Vocabulary";

      const prompt = `Compare these books based on the user's preferences and select the best match:
- Pacing: ${pacingValue}
- Length: ${lengthValue}
- Style: ${styleValue}

Books to compare:
1. ${bookName1}
2. ${bookName2}
3. ${bookName3}
4. ${bookName}

STRICT OUTPUT FORMAT:
[Recommended Book Title]%%[50-word explanation exactly matching these criteria: 
1. Starts with "This book matches because..."
2. Specifically mentions ${pacingValue} pacing, ${lengthValue} length, and ${styleValue} style
3. Exactly 50 words]

Example:
The Great Gatsby%%This book matches because its medium-paced narrative (${pacingValue}) fits perfectly with the ${lengthValue} length. The ${styleValue} style shines through Fitzgerald's lyrical prose. The story's rhythm aligns with readers who prefer deliberate development while maintaining engagement through vivid imagery and symbolic depth, making it ideal for these preferences.`;
      const apiKey = import.meta.env.VITE_GROK_KEY;
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama3-70b-8192",
            messages: [{ role: "user", content: prompt }],
          }),
        }
      );

      if (response.status === 429) {
        setResult(
          fallbackSummaries[
            Math.floor(Math.random() * fallbackSummaries.length)
          ]
        );
        return;
      }

      if (!response.ok) {
        setResult(
          fallbackSummaries[
            Math.floor(Math.random() * fallbackSummaries.length)
          ]
        );
        return;
      }

      const data = await response.json();

      if (data?.choices?.[0]?.message?.content) {
        setLoaded(true); // Set loaded state to true when the API response is successful
        setErrorMsg(null); // Clear any previous errors
        setResult(data.choices[0].message.content);
      } else {
        setResult(
          fallbackSummaries[
            Math.floor(Math.random() * fallbackSummaries.length)
          ]
        );
      }
    } catch (error) {
      setResult(
        fallbackSummaries[Math.floor(Math.random() * fallbackSummaries.length)]
      );
      console.error(error); // Log the error for debugging
    } finally {
      setIsLoading(false); // Set loading state to false after request completion
    }
  };

  return (
    <div className="w-[100%] mt-[2em] md:mt-[5em] flex flex-col items-center rounded-[1em] px-4 md:px-0">
      <h1 className="font-sans text-[1.8em] md:text-[3em] font-bold text-center">
        Compare This Book <br /> with Your Selections
      </h1>
      <p className="w-full md:w-[70%] text-center text-[12px] md:text-[13px] text-gray-500 pt-[1em] pb-[1em]">
        Pick up to 3 books and tell us what you like — we'll compare them with
        this one and suggest your best match.
      </p>

      <div className="compare-section pt-[1em] md:pt-[2em] w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center">
        {/* Current Book */}
        <div className="imageContainer w-full md:w-[20em] h-auto md:h-[25em] p-[1em] flex flex-col items-center justify-around">
          <div className="flex flex-col items-center">
            <h1 className="text-[1.2em] md:text-[1.4em] font-bold">
              CURRENT BOOK
            </h1>
          </div>
          <div className="w-[10em] md:w-[12em] h-[14em] md:h-[16.75em] bg-green-100">
            {bookCover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${bookCover_i}-L.jpg`}
                alt={bookName}
                className="w-[100%] h-[100%] object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>
          <h3 className="text-[0.7em] md:text-[0.8em] font-thin text-gray-600 tracking-[1px] md:tracking-[2px] text-center mt-2">
            {bookName}
          </h3>
        </div>

        {/* Compare Section */}
        <div className="w-full md:w-[40%] p-[1em]">
          <h3 className="text-[1.2em] md:text-[1.4em] font-bold pt-[7px]">
            COMPARE WITH
          </h3>

          {/* Input bars for Book 1, Book 2, and Book 3 */}
          <div className="flex flex-col space-y-3 md:space-y-4 mt-3 md:mt-4">
            <input
              type="text"
              placeholder="Enter Book 1"
              className="p-2 bg-gray-100 text-gray-700 rounded-md w-full h-[2.5em] md:h-[2em]"
              ref={book1}
            />
            <input
              type="text"
              placeholder="Enter Book 2"
              className="p-2 bg-gray-100 text-gray-700 rounded-md w-full h-[2.5em] md:h-[2em]"
              ref={book2}
            />
            <input
              type="text"
              placeholder="Enter Book 3"
              className="p-2 bg-gray-100 text-gray-700 rounded-md w-full h-[2.5em] md:h-[2em]"
              ref={book3}
            />
          </div>

          {/* Preferences Section */}
          <h3 className="text-[1.2em] md:text-[1.4em] font-bold pt-[8px] md:pt-[12px]">
            YOUR PREFERENCES
          </h3>

          {/* Dropdowns - stacked on mobile, inline on desktop */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
            {/* Pacing Dropdown */}
            <div>
              <label
                htmlFor="pacing"
                className="block text-[11px] md:text-[12px] text-gray-500 tracking-[2px] md:tracking-[3px]"
              >
                Pacing
              </label>
              <select
                id="pacing"
                className="bg-gray-100 w-full md:w-[7em] p-1 rounded-md"
                ref={pacing}
              >
                <option value="slow">Slow</option>
                <option value="medium">Medium</option>
                <option value="fast">Fast</option>
              </select>
            </div>

            {/* Length Dropdown */}
            <div>
              <label
                htmlFor="length"
                className="block text-[11px] md:text-[12px] text-gray-500 tracking-[2px] md:tracking-[3px]"
              >
                Length
              </label>
              <select
                id="length"
                className="bg-gray-100 w-full md:w-[7em] p-1 rounded-md"
                ref={length}
              >
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
              </select>
            </div>

            {/* Style Dropdown */}
            <div>
              <label
                htmlFor="style"
                className="block text-[11px] md:text-[12px] text-gray-500 tracking-[2px] md:tracking-[3px]"
              >
                Style
              </label>
              <select
                id="style"
                className="bg-gray-100 w-full md:w-[8em] p-1 rounded-md"
                ref={style}
              >
                <option value="Story Driven">Story Driven</option>
                <option value="Character Driven">Character Driven</option>
                <option value="Light And Easy">Light and Easy</option>
                <option value="Easy Vocabulary">Easy Vocabulary</option>
              </select>
            </div>
          </div>

          {/* Compare Button - centered on mobile */}
          <div className="flex justify-center md:justify-start">
            <button
              className="w-full md:w-[15em] h-[3em] md:h-[3.5em] mt-[1em]
                bg-orange-500 hover:bg-orange-400 cursor-pointer active:bg-orange-700
                text-white font-semibold text-[14px] md:text-[16px]
                px-4 md:px-6 py-2 md:py-3 rounded-[0.25rem]
                shadow-sm hover:shadow-md
                transition-all duration-200
                transform hover:-translate-y-[1px] active:translate-y-0
                inline-flex justify-center items-center"
              onClick={handleCompareResult}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "COMPARE"}
            </button>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <p className="text-red-500 text-center mt-3 md:mt-4 text-[12px] md:text-[14px]">
              {errorMsg}
            </p>
          )}
        </div>
      </div>

      {/* Show comparison result if loaded */}
      {loaded && <CompareResult data={result} currentBookName={bookName} />}
    </div>
  );
};

export default CompareBooks;
