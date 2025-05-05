import { FC } from "react";
import { useState } from "react";

interface bookDataShape {
  bookName: string | undefined;
  authorName: string | undefined;
  bookPublishYear: number | undefined;
  bookCover_i: number | undefined;
  bookKey: string | undefined;
}

/*
`https://covers.openlibrary.org/b/id/${bookCover_i}-L.jpg`
*/

const BookDataContainer: FC<bookDataShape> = ({
  bookName,
  authorName,
  bookPublishYear,
  bookCover_i,
  bookKey,
}) => {
  const [showSummary, setShowSummary] = useState("hidden");
  const [bookSummary, setBookSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));
  const generateSummary = async () => {
    setShowSummary("flex flex-col"); // Tailwind fixed
    setIsLoading(true);
    setErrorMsg("");
    try {
      // const apiKey = import.meta.env.VITE_API_KEY; // Replace with secure env method in production
      const apiKey = import.meta.env.VITE_GROK_KEY;
      const prompt = `You are a book summarizer. Write a detailed, engaging summary of the book, including all major plot points and twists. Summarize in under 500 words. Make sure to separate different ideas or paragraphs with clear line breaks.
  
  Title: ${bookName} 
  Author: ${authorName}
  
  If you're unable to provide a summary, respond with: "Cannot get summary right now."
      `;

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
        console.log("Rate limit hit, retrying...");
        setBookSummary(
          `${bookName} by ${authorName}, published in ${bookPublishYear}, offers readers a compelling glimpse into the power of storytelling itself. With its thoughtful writing and a rhythm that gently unfolds, this book has continued to resonate with those who appreciate literature that lingers in the mind. Whether approached with curiosity or revisited for deeper meaning, ${bookName} invites quiet reflection and personal interpretation.`
        );
      }

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      if (data?.choices?.[0]?.message?.content) {
        setBookSummary(data.choices[0].message.content);
      } else {
        setBookSummary(
          `${bookName} by ${authorName}, published in ${bookPublishYear}, offers readers a compelling glimpse into the power of storytelling itself. With its thoughtful writing and a rhythm that gently unfolds, this book has continued to resonate with those who appreciate literature that lingers in the mind. Whether approached with curiosity or revisited for deeper meaning, ${bookName} invites quiet reflection and personal interpretation.`
        );
      }
    } catch (error) {
      setBookSummary(
        `${bookName} by ${authorName}, published in ${bookPublishYear}, offers readers a compelling glimpse into the power of storytelling itself. With its thoughtful writing and a rhythm that gently unfolds, this book has continued to resonate with those who appreciate literature that lingers in the mind. Whether approached with curiosity or revisited for deeper meaning, ${bookName} invites quiet reflection and personal interpretation.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  // LEARN MORE
  const getOpenLibraryURL = (key: string): string => {
    return `https://openlibrary.org${key}`;
  };

  const handleLearnMore = () => {
    if (!bookKey) return;
    const link = getOpenLibraryURL(bookKey);
    window.open(link, "_blank");
  };

  return (
    <div className="shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-[1em] w-[100%] flex flex-col justify-around items-center pt-[2em] pb-[3em]">
      <div className="flex flex-col items-center w-full px-4 md:flex-row md:justify-around md:items-center md:px-0">
        {/* Image Container */}
        <div className="image-container w-[12em] h-[18em] md:w-[16em] md:h-[25em] md:ml-[3em] mb-6 md:mb-0">
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

        {/* Text Content */}
        <div className="about-container w-full md:w-[60%] h-[100%] px-4 md:pl-[2em] md:pr-[2em] pt-[2em] md:pt-[5em] text-center md:text-left">
          <h1 className="text-[1.8em] md:text-[3em] font-bold font-sans tracking-[1px] md:tracking-[3px] pb-[8px] md:pb-[12px]">
            {bookName}
          </h1>
          <h3 className="text-[0.9em] md:text-[1em] text-gray-600 font-bold tracking-[1px] md:tracking-[3px] pb-[8px] md:pb-[12px]">
            {authorName}
          </h3>
          <p className="text-[10px] md:text-[12px] text-gray-600 tracking-[0.5em] md:tracking-[1em]">
            {bookPublishYear}
          </p>

          {/* Buttons - Stacked and Centered on Mobile */}
          <div className="flex flex-col items-center mt-[2em] md:mt-[3em] md:items-start overflow-hidden">
            <button
              className="
                w-[12em] md:w-[15em] h-[3em] md:h-[3.5em] 
                bg-orange-500 hover:bg-orange-400 cursor-pointer active:bg-orange-700
                text-white font-semibold text-[14px] md:text-[16px]
                px-4 md:px-6 py-2 md:py-3 rounded-[0.25rem]
                shadow-sm hover:shadow-md
                transition-all duration-200
                transform hover:-translate-y-[1px] active:translate-y-0
                inline-flex justify-center items-center
                mb-3 md:mb-0 md:mt-[3em]
                 
                overflow-hidden
              "
              onClick={generateSummary}
            >
              <p>GENERATE SUMMARY</p>
            </button>

            <button
              className="
                w-[12em] md:w-[15em] h-[3em] md:h-[3.5em] 
                bg-slate-700 hover:bg-slate-400 cursor-pointer active:bg-slate-700
                text-white font-semibold text-[14px] md:text-[16px]
                px-4 md:px-6 py-2 md:py-3 rounded-[0.25rem]
                shadow-sm hover:shadow-md
                transition-all duration-200
                transform hover:-translate-y-[1px] active:translate-y-0
                inline-flex justify-center items-center
                mb-3 md:mb-0 md:mt-[1em]
              "
            >
              <p>BROWSE PRICES</p>
            </button>

            <div className="mt-[1em]">
              <a
                href="#"
                className="underline text-[10px] md:text-[12px]"
                onClick={handleLearnMore}
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div
        className={`${showSummary} mt-[3em] md:mt-[5em] border-2 w-[90%] p-[2em] md:p-[5em] pt-[2em] md:pt-[3em] m-[1em] md:m-[3em]`}
      >
        <h1 className="text-center text-[1.2em] md:text-[1.5em] font-bold tracking-[4px] md:tracking-[8px] mb-[1em]">
          SHORT SUMMARY
        </h1>

        {isLoading ? (
          <p className="italic text-center font-mono text-gray-500 animate-pulse">
            Generating summary, please wait...
          </p>
        ) : errorMsg ? (
          <p className="italic text-center font-mono text-red-500">
            {errorMsg}
          </p>
        ) : (
          <p className="text-center font-sans text-[13px] md:text-[15px] italic">
            {bookSummary}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookDataContainer;
