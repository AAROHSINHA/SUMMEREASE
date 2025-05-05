import { FC } from "react";

interface Book {
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail: string;
    };
  };
  id: string;
  [key: string]: any;
}

interface GridProp {
  data: Book[];
}

const BrowseBooksGrid: FC<GridProp> = ({ data }) => {
  return (
    <div className="flex flex-wrap">
      {data.map((element: Book) => (
        <div
          className="border border-gray-300 w-[20%] h-[22em] flex flex-col items-center justify-center hover:cursor-pointer shadow-sm"
          key={element.id}
        >
          <img
            src={element.volumeInfo.imageLinks?.thumbnail || "/fallback.jpg"}
            alt={element.volumeInfo.title}
            className="w-[70%] h-[60%] transition-transform duration-300 transform hover:scale-110 object-cover"
          />
          <h1 className="text-[1em] font-bold mt-[1em] text-center">
            {element.volumeInfo.title}
          </h1>
          <p className="text-[12px] text-gray-500 text-center">
            {element.volumeInfo.authors?.[0] || "Unknown Author"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BrowseBooksGrid;
