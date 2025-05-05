import img from "./recommendation2.jpg";
import HomeRecommendationContents from "./ComponentComponents/HomeRecommendationContents";
const HomeRecommendation = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden  flex flex-col lg:flex-row justify-center items-center bg-zinc-100">
      {/* Image Section - Fixed to show on all screens */}
      <div className="w-full lg:w-[50%] h-[300px] lg:h-[600px] p-4 lg:p-[3.2em]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[50%] p-4 lg:p-[3.2em]">
        <HomeRecommendationContents />
      </div>
    </div>
  );
};

export default HomeRecommendation;
