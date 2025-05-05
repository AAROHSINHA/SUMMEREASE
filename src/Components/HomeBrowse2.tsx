import img from "./discover1.jpg";
import HomeBrowse2Content from "./ComponentComponents/HomeBrowse2Content";

const HomeBrowse2 = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden mt-[5em] flex flex-col lg:flex-row justify-center items-center bg-zinc-100">
      {/* Image Section - Fixed to show on all screens */}
      <div className="w-full lg:w-[50%] h-[300px] lg:h-[600px] p-4 lg:p-[3.2em]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[50%] p-4 lg:p-[3.2em]">
        <HomeBrowse2Content />
      </div>
    </div>
  );
};

export default HomeBrowse2;
