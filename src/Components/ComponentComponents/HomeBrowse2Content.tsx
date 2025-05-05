import { useNavigate } from "react-router-dom";
const HomeBrowse2Content = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/browse");
  };
  return (
    <div>
      <div className="w-full h-full flex flex-col gap-3 lg:gap-5">
        {/* Hide this on mobile */}
        <p className="hidden lg:block font-sans text-sm uppercase tracking-widest font-bold text-amber-600">
          SEARCH FOR BOOKS
        </p>

        {/* Title - smaller on mobile */}
        <h1 className="font-sans text-2xl lg:text-5xl font-bold text-gray-900 overflow-hidden">
          DISCOVER YOUR NEXT GREAT READ
        </h1>

        {/* Hide description on mobile */}
        <p className="hidden lg:block font-sans text-gray-600 text-lg leading-relaxed max-w-[90%]">
          Can't decide what to read next? Explore our hand-picked collection of
          thrillers, dramas, love stories, and hidden gems. Take your time—your
          next favorite book is waiting.
        </p>

        <div className="mt-2">
          {/* Hide book title on mobile */}
          <p className="hidden lg:block font-sans font-medium text-gray-900 italic">
            The Kinfolk Home
          </p>

          <button
            className="w-full lg:w-auto mt-4 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-sans font-medium tracking-wide transition-colors duration-300 hover:cursor-pointer"
            onClick={handleClick}
          >
            Browse Books
          </button>

          {/* Hide book count on mobile */}
          <p className="hidden lg:block mt-2 font-sans text-sm text-gray-500 italic">
            'The Kinfolk Home' and 1,284 others
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBrowse2Content;
