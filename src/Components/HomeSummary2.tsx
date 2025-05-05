import HomeSummary2Contents from "./ComponentComponents/HomeSummary2Contents";
import img from "./summary2.jpg";

const HomeSummary2 = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden  flex flex-col lg:flex-row justify-center items-center bg-zinc-100">
      <div className="w-full lg:w-[50%] p-4 lg:p-[3.2em]">
        <HomeSummary2Contents />
      </div>
      <div className="w-full lg:w-[50%] h-[300px] lg:h-[600px] p-4 lg:p-[3.2em]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </div>
  );
};

export default HomeSummary2;
