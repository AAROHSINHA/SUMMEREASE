import { FC, useState } from "react";
import RecommendedBook from "./RecommendedBook";

interface recProp {
  selectedElements: string[];
}

const RecommendedDiv: FC<recProp> = ({ selectedElements }) => {
  const [bookTitles, setBookTitles] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const fallbackBooks = [
    "The Night Circus", // Fantasy + Romance + Slow Burn + Magical Vibes
    "The Song of Achilles", // Historical Fiction + Romance + Character Driven
    "Circe", // Fantasy + Feminist Lit + Story Focused
    "The Secret History", // Dark Academia + Thriller + Philosophical
    "Where the Crawdads Sing", // Mystery + Fiction + Heart-Warming + Slowly Paced
    "Piranesi", // Fantasy + Philosophical + Easy to Read
    "The Midnight Library", // Fiction + Sci-fi touch + Philosophical
    "The Book Thief", // Historical Fiction + Young Adult + Heart-Wrenching
    "The House in the Cerulean Sea", // Fantasy + Feel-Good + Character Driven
    "The Giver of Stars", // Fiction + Historical + Strong Female Leads + Slowly Paced
    "Dune", // Sci-fi + Philosophy + Epic
    "The Priory of the Orange Tree", // Fantasy + Feminism + Epic + Character Driven
    "Red, White & Royal Blue", // Romance + Political Fiction + Funny
    "Six of Crows", // Fantasy + Thriller + Dark and Gripping
    "The Invisible Life of Addie LaRue", // Fantasy + Romance + Heart-Warming
    "Big Little Lies", // Fiction + Drama + Heart-Warming + Dark and Gripping
    "The Goldfinch", // Fiction + Dark and Gripping + Philosophical
    "Anxious People", // Fiction + Humor Rich + Heart-Warming
    "The Silent Patient", // Thriller + Psychological + Dark and Gripping
    "The Martian", // Sci-fi + Philosophical + Easy to Read
    "The Fault in Our Stars", // Romance + Heart-Wrenching + Young Adult
    "The Paper Palace", // Fiction + Romance + Character Driven
    "The Nightingale", // Historical Fiction + Heart-Warming + Dark and Gripping
    "Eleanor Oliphant Is Completely Fine", // Fiction + Character Driven + Humor Rich
    "The Vanishing Half", // Fiction + Philosophical + Heart-Warming
    "The Handmaid's Tale", // Dystopian Fiction + Dark and Gripping + Philosophical
    "A Court of Thorns and Roses", // Fantasy + Romance + Slow Burn
    "The Shadows", // Thriller + Dark and Gripping + Mystery
    "The Ocean at the End of the Lane", // Fiction + Fantasy + Philosophical
    "The Tattooist of Auschwitz", // Historical Fiction + Heart-Warming + Dark and Gripping
    "Station Eleven", // Sci-fi + Post-Apocalyptic + Character Driven
    "Before We Were Strangers", // Romance + Character Driven + Slow Burn
    "The Seven Husbands of Evelyn Hugo", // Fiction + Romance + Character Driven
    "Shantaram", // Fiction + Adventure + Philosophical
    "The Night Watchman", // Historical Fiction + Character Driven + Heart-Warming
    "The Song of Ice and Fire", // Fantasy + Epic + Dark and Gripping
    "The Priory of the Orange Tree", // Fantasy + Feminist Lit + Epic
    "Good Company", // Fiction + Character Driven + Humor Rich
    "A Little Life", // Fiction + Dark and Gripping + Heart-Wrenching
    "The Paris Library", // Historical Fiction + Heart-Warming + Philosophical
    "The Ocean at the End of the Lane", // Fantasy + Fiction + Philosophical
    "The City We Became", // Fantasy + Sci-fi + Urban Fiction
    "The Wish", // Fiction + Romance + Heart-Warming
    "Cloud Atlas", // Sci-fi + Philosophical + Epic
    "The House of the Spirits", // Historical Fiction + Magical Realism
    "Homegoing", // Historical Fiction + Philosophical + Character Driven
    "All the Light We Cannot See", // Historical Fiction + Heart-Warming
    "The Light We Lost", // Romance + Heart-Warming + Character Driven
    "The Night Manager", // Thriller + Suspense + Dark and Gripping
    "Little Fires Everywhere", // Fiction + Drama + Character Driven
    "The Great Gatsby", // Fiction + Classic + Heart-Wrenching
    "The Night Circus", // Fantasy + Magical Realism + Slow Burn
    "The Whisper Man", // Thriller + Dark and Gripping + Mystery
    "Normal People", // Fiction + Romance + Character Driven
    "The Wife Between Us", // Thriller + Mystery + Dark and Gripping
    "The Girl on the Train", // Thriller + Psychological + Dark and Gripping
    "The Light Between Oceans", // Fiction + Romance + Heart-Wrenching
  ];

  function getRandomFallbackBooks(): string[] {
    const shuffled = [...fallbackBooks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }

  const handleRecommendClick = async () => {
    try {
      // const apiKey = import.meta.env.VITE_GROK_KEY;
      const selectedString = selectedElements.join(", ");
      const prompt = `Recommend exactly 3 books that best match these themes: ${selectedString}.

STRICT RULES:
1. Return ONLY the 3 book titles
2. Separate titles EXACTLY with "%%" (no other characters)
3. No additional text, explanations, or formatting
4. Do not number the books

Example output:
The Night Circus%%The Song of Achilles%%Circe`;
      const apiKey = import.meta.env.VITE_GROK_KEY;
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama3-70b-8192",
            messages: [{ role: "user", content: prompt }],
          }),
        }
      );

      if (response.status === 429 || !response.ok) {
        console.log("Rate limit hit, retrying...");
        console.log("CLOSING");
        setLoaded(true);
        setBookTitles(getRandomFallbackBooks());
        return;
      }

      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content;

      if (content) {
        const books = content.split("%%").map((b: string) => b.trim());
        setLoaded(true);
        setBookTitles(books);
      } else {
        setLoaded(true);
        setBookTitles(getRandomFallbackBooks());
      }
    } catch (error) {
      console.error(error);
      setLoaded(true);
      setBookTitles(getRandomFallbackBooks());
    }
  };

  return (
    <div className="mt-[1em] p-[1em] md:p-[3em] pt-[0em] flex flex-col items-center gap-5">
      <button
        className="w-full md:w-[25em] h-[4em] md:h-[5.5em] mt-[1em]
        bg-orange-500 hover:bg-orange-400 cursor-pointer active:bg-orange-700
        text-white font-semibold text-[14px] md:text-[16px]
        px-4 md:px-6 py-2 md:py-3 rounded-[0.25rem]
        shadow-sm hover:shadow-md
        transition-all duration-200
        transform hover:-translate-y-[1px] active:translate-y-0
        inline-flex justify-center items-center"
        onClick={handleRecommendClick}
      >
        RECOMMEND BOOKS
      </button>

      {loaded && (
        <>
          <h1 className="font-bold text-[2em] md:text-[3em] text-center m-[0.5em] md:m-[1em] underline">
            RECOMMENDED BOOKS
          </h1>

          <div className="w-[100%] flex flex-col md:flex-row justify-around items-center shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-[1em] p-[1em] md:p-[2em] gap-4 md:gap-0">
            {bookTitles.slice(0, 3).map((title, index) => (
              <RecommendedBook key={index} title={title} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecommendedDiv;
