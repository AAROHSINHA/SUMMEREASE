import img1 from "./home/to_kill_a_mockingbird.jpg";
import img3 from "./home/a_fact_of_a_body.jpg";
import img4 from "./home/a_man_with_one_of_those_faces.jpg";
import img5 from "./home/and_then_there_were_none.jpg";
import img6 from "./home/falls_on_the_shadow.jpg";
import img7 from "./home/dune.jpg";
import img8 from "./home/me_before_you.jpg";
import img9 from "./home/the_chaos_now.jpg";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  { img_path: img1, name: "To Kill a Mockingbird" },
  { img_path: img3, name: "A Fact of a Body" },
  { img_path: img4, name: "A Man with One of Those Faces" },
  { img_path: img5, name: "And Then There Were None" },
  { img_path: img6, name: "Falls on the Shadow" },
  { img_path: img7, name: "Dune" },
  { img_path: img8, name: "Me Before You" },
  { img_path: img9, name: "The Chaos Now" },
];

interface Book {
  img_path: string;
  name: string;
}

const HomeBooks = () => {
  const [displayBooks, setDisplayBooks] = useState<Book[]>([]);
  const [isInView, setIsInView] = useState<boolean[]>(new Array(8).fill(false));
  const navigate = useNavigate();
  const bookRefs = useRef<(HTMLDivElement | null)[]>([]);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(0, 5);
  };

  useEffect(() => {
    const showBooks = shuffleArray(data);
    setDisplayBooks(showBooks);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setIsInView((prevState) => {
            const updatedState = [...prevState];
            updatedState[index] = true;
            return updatedState;
          });
        }
      });
    });

    bookRefs.current.forEach((bookRef) => {
      if (bookRef) observer.observe(bookRef);
    });

    return () => {
      observer.disconnect();
    };
  }, [displayBooks]);

  return (
    <div className="hidden md:block w-screen h-[85vh] mt-[3em] mb-[5em] p-[5em]">
      <h1 className="font-sans text-[1.2em] font-bold ml-[3px]">TOP PICKS</h1>

      <div className="books-container h-[100%] mt-[1em] flex justify-center">
        {displayBooks.map((element, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) bookRefs.current[index] = el;
            }}
            className={`w-[30em] p-[0.5em] transform transition-all ${
              isInView[index]
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{
              transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
            }}
          >
            <img
              src={element.img_path}
              alt={element.name}
              loading="lazy"
              className="w-[100%] h-[100%] hover:cursor-pointer transition-transform transform hover:scale-103 duration-300"
              onClick={() =>
                navigate(`/book?q=${encodeURIComponent(element.name)}`)
              }
            />
          </div>
        ))}
      </div>

      <div
        className="flex justify-end underline hover:cursor-pointer hover:tracking-[3px] transition-all duration-300 delay-100 ease-in-out"
        onClick={() => navigate("/browse")}
      >
        <p>VIEW MORE</p>
      </div>
    </div>
  );
};

export default HomeBooks;
