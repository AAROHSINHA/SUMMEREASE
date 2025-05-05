import img1 from "./cover/t3.png";
// import img2 from "./cover/t1.png";

const HomeSummary = () => {
  return (
    <div className="h-[80vh] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
          {/* Text Section - Consistent with HomeBrowse */}
          <div className="w-full lg:w-[50%] h-full flex flex-col justify-center gap-5 overflow-y-hidden">
            {/* Color Options - Choose one */}
            {/* Option 1: Emerald Green */}
            <p className="font-sans text-sm uppercase tracking-widest font-bold text-rose-600">
              GET CONCISE SUMMARIES
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
              GET QUICK SUMMARIES
            </h1>

            <p className="font-sans text-gray-600 text-lg leading-relaxed max-w-[90%] overflow-hidden">
              Dive into expertly crafted summaries that break down complex
              narratives, characters, and themes — giving you a complete
              understanding in just a few minutes.
            </p>

            <div className="mt-2overflow-hidden">
              <p className="font-sans font-medium text-gray-900 italic">
                It Ends With Us
              </p>
              <button className="mt-4 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-sans font-medium tracking-wide transition-colors duration-300">
                Browse Books
              </button>
              <p className="mt-2 font-sans text-sm text-gray-500 italic">
                'It Ends With Us' and 1,284 others
              </p>
            </div>
          </div>

          {/* Minimalist Tall Book Display */}
          <div className="relative w-full lg:w-1/2 h-full flex items-end">
            <div className="relative w-full h-[90%] flex justify-center rounded-[1em] ">
              {/* Tall Book Covers */}
              <img
                src={img1}
                alt="Book cover"
                className="h-full w-auto object-contain rounded-lg shadow-xl border border-gray-100 transform transition-transform  z-10 "
              />
              {/* <img
                src={img2}
                alt="Book comparison"
                className="h-[95%] w-auto object-contain absolute right-0 rounded-lg shadow-xl border border-gray-100 transform transition-transform hover:scale-[1.02]"
                style={{ filter: "drop-shadow(-8px 0 12px rgba(0,0,0,0.1))" }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSummary;
