import { useNavigate } from "react-router-dom";
const HomeRecommendationContents = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/get-recommendations");
  };
  return (
    <div>
      <div className="w-full h-full flex flex-col gap-3 lg:gap-5">
        {/* Hide this on mobile */}
        <p className="hidden lg:block font-sans text-sm uppercase tracking-widest font-bold text-amber-600">
          RECOMMENDATIONS BASED ON PREFERENCES
        </p>

        {/* Title - smaller on mobile */}
        <h1 className="font-sans text-2xl lg:text-5xl font-bold text-gray-900 overflow-hidden">
          GET READING RECOMMENDATIONS
        </h1>

        {/* Hide description on mobile */}
        <p className="hidden lg:block font-sans text-gray-600 text-lg leading-relaxed max-w-[90%]">
          Find the perfect book for your mood with our personalized
          recommendations. Whether you're craving a thrilling adventure, an
          emotional drama, a heartwarming love story, or something completely
          unique, we’ve got something just for you.
        </p>

        <div className="mt-2">
          {/* Hide book title on mobile */}
          <p className="hidden lg:block font-sans font-medium text-gray-900 italic">
            The Prodigal Prophet
          </p>

          <button
            className="w-full lg:w-auto mt-4 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-sans font-medium tracking-wide transition-colors duration-300 hover:cursor-pointer"
            onClick={handleClick}
          >
            Get Recommendations
          </button>

          {/* Hide book count on mobile */}
          <p className="hidden lg:block mt-2 font-sans text-sm text-gray-500 italic">
            'The Prodigal Prophet' and 1,284 others
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeRecommendationContents;
