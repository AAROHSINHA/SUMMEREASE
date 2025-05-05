type TopBooksProps = {
  books: number[];
};

const TopBooks = ({ books }: TopBooksProps) => {
  return (
    <div className="pt-[2em]">
      <h1 className="pl-[3.3em] pb-[1em]">TOP BOOKS</h1>
      <div className="flex gap-7 justify-center">
        <div className="w-[15vw] h-[45vh] bg-red-500">
          <img
            src={`https://covers.openlibrary.org/b/id/${books[0]}-L.jpg
`}
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[15vw] h-[45vh] bg-red-500">
          <img
            src={`https://covers.openlibrary.org/b/id/${books[1]}-L.jpg
`}
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[15vw] h-[45vh] bg-red-500">
          <img
            src={`https://covers.openlibrary.org/b/id/${books[2]}-L.jpg
`}
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[15vw] h-[45vh] bg-red-500">
          <img
            src={`https://covers.openlibrary.org/b/id/${books[3]}-L.jpg
`}
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[15vw] h-[45vh] bg-red-500">
          <img
            src={`https://covers.openlibrary.org/b/id/${books[4]}-L.jpg
`}
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
      <h1 className="pl-[67em] pt-[1em] underline">VIEW MORE</h1>
    </div>
  );
};

export default TopBooks;
