// import TopBooks from "../Components/TopBooks";
// import img1 from "./boook.jpg";

// const Browse = () => {
//   return (
//     <div className="w-screen flex flex-col items-center">
//       <div className="relative w-full flex flex-col items-center justify-center h-[40vh] overflow-hidden">
//         {/* Overlay div for fading background */}
//         <div
//           className="absolute top-0 left-0 right-0 bottom-0 opacity-50 z-0"
//           style={{
//             backgroundImage: `url(${img1})`,
//             backgroundSize: "cover",
//             backgroundPosition: "top",
//           }}
//         ></div>

//         {/* Content stays above */}
//         <div className="z-10 flex flex-col items-center justify-center h-full text-center">
//           <h1 className="text-[3em] font-bold text-[#1a1a1a] drop-shadow-md">
//             DISCOVER YOUR NEXT GREAT READ
//           </h1>

//           <div className="search hidden md:flex w-[50%] h-[5em] pt-[1em] pb-[1em]">
//             <input
//               type="text"
//               placeholder="Enter Book Name..."
//               className="bg-gray-100 text-gray-700 p-2 px-4 rounded-[1em]
//               focus:outline-none w-full
//               placeholder:text-gray-500 transition-all duration-200"
//             />
//           </div>

//           <p className="font-bold italic text-[12px] text-black drop-shadow-sm">
//             "A room without books is like a body without a soul" - Marcus
//             Tullius Cicero
//           </p>
//         </div>
//       </div>

//       {/* Other page content */}
//       <TopBooks />
//     </div>
//   );
// };

// export default Browse;
