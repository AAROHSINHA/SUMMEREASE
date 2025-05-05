import { useNavigate } from "react-router-dom";
const HomeSummary2Contents = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/browse");
  };
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 h-full px-4">
      {/* Text Section */}
      <div className="w-full lg:w-[100%] h-full flex flex-col justify-center lg:items-start items-center gap-5 overflow-y-hidden">
        {/* Main Title */}
        <p className="hidden lg:block font-sans text-sm uppercase tracking-widest font-bold text-amber-600 text-rose-600">
          GET CONCISE SUMMARIES
        </p>
        <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center lg:text-left overflow-hidden">
          GET QUICK SUMMARIES
        </h1>

        {/* Hidden paragraph on mobile */}

        <p className="hidden md:block font-sans text-gray-600 text-lg leading-relaxed max-w-[90%] overflow-hidden lg:text-left text-center">
          Dive into expertly crafted summaries that break down complex
          narratives, characters, and themes — giving you a complete
          understanding in just a few minutes.
        </p>
        <p className="hidden lg:block font-sans font-medium text-gray-900 italic">
          It Ends With Us
        </p>
        {/* Button */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <button
            className="w-full lg:w-auto mt-4 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-sans font-medium tracking-wide transition-colors duration-300 hover:cursor-pointer"
            onClick={handleClick}
          >
            Get Summaries
          </button>
        </div>

        {/* Hidden small italic text on mobile */}
        <p className="hidden md:block mt-2 font-sans text-sm text-gray-500 italic lg:text-left text-center">
          'It Ends With Us' and 1,284 others
        </p>
      </div>
    </div>
  );
};

export default HomeSummary2Contents;
