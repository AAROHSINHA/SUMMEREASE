import img1 from "./boook.jpg";
import { useNavigate } from "react-router-dom";

/*
Get the best of every book in a fraction of the time.
*/

const Cover = () => {
  const navigate = useNavigate();
  const handleBrowseBooks = () => {
    navigate("/browse");
  };
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-[100%] flex-col items-center md:w-[50%] flex flex-col  gap-[1em] justify-center pb-[5em] items-center">
        <h1 className="text-[3em] md:text-[4.5em] font-bold tracking-[2px]">
          SUMMEREASE
        </h1>
        <p className="text-[0.8em] text-center md:text-[1.2em] tracking-[3px] w-[77%]">
          Smart Book Summaries. Save Time, Stay Informed.
        </p>
        <div className="flex justify-center md:w-[77%]">
          <button
            className="bg-black text-white w-[12em] h-[3em] rounded-[12px] z-5 hover:cursor-pointer hover:bg-gray-700 transistion  duration-300 ease-in-out"
            onClick={handleBrowseBooks}
          >
            <p>BROWSE BOOKS</p>
          </button>
        </div>
      </div>
      <div
        className="hidden md:flex w-[50%] relative"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-30" />
      </div>
    </div>
  );
};

export default Cover;
