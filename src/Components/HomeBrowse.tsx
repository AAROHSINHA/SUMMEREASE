import img1 from "./cover/t1.png";
import img2 from "./cover/t2.png";

const HomeBrowse = () => {
  return (
    <div className="h-[80vh] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden mt-[5em]">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
          {/* Images Section (unchanged) */}
          <div className="relative w-full lg:w-1/2 h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-[90%] h-[90%] bg-gray-100 rounded-xl transform rotate-3"></div>
            <img
              src={img1}
              alt="Search Interface"
              className="relative z-10 w-[90%] h-auto rounded-xl shadow-2xl border-4 border-white"
            />
            <img
              src={img2}
              alt="Book Details"
              className="absolute bottom-0 right-0 w-[75%] max-w-[75%] h-auto rounded-xl shadow-2xl border-4 border-white transform -rotate-3 z-20"
            />
          </div>

          {/* Content Section - Improved */}
          <div className="w-full lg:w-[50%] h-full flex flex-col justify-center gap-5 overflow-y-hidden">
            {/* Color Options - Choose one */}
            {/* Option 1: Emerald Green */}
            <p className="font-sans text-sm uppercase tracking-widest font-bold text-amber-600">
              SEARCH FOR BOOKS
            </p>

            {/* Option 2: Rose Pink */}
            {/* <p className="font-sans text-sm uppercase tracking-widest font-bold text-rose-600">
              Summer East
            </p> */}

            {/* Option 3: Amber Orange */}
            {/* <p className="font-sans text-sm uppercase tracking-widest font-bold text-amber-600">
              Summer East
            </p> */}

            <h1 className="font-sans text-4xl lg:text-5xl font-bold text-gray-900 overflow-hidden">
              DISCOVER YOUR NEXT GREAT READ
            </h1>

            <p className="font-sans text-gray-600 text-lg leading-relaxed max-w-[90%] overflow-hidden">
              Can't decide what to read next? Explore our hand-picked collection
              of thrillers, dramas, love stories, and hidden gems. Take your
              time—your next favorite book is waiting.
            </p>

            <div className="mt-2overflow-hidden">
              <p className="font-sans font-medium text-gray-900 italic">
                The Bedlam Stacks
              </p>
              <button className="mt-4 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-sans font-medium tracking-wide transition-colors duration-300">
                Browse Books
              </button>
              <p className="mt-2 font-sans text-sm text-gray-500 italic">
                'The Bedlam Stacks' and 1,284 others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrowse;
