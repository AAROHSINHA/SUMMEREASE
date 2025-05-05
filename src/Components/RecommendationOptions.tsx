import RecommendationOptionsTop from "./RecommendationOptionsTop";
import RecommendationChoices from "./RecommendationChoices";
import RecommendedDiv from "./RecommendedDiv";
import { useState } from "react";
const RecommendationOptions = () => {
  const [choices, setChoices] = useState<string[]>([]);
  return (
    <div className="    w-screen  p-[5em]">
      <RecommendationOptionsTop />
      <RecommendationChoices onSelect={setChoices} selectedElements={choices} />
      <RecommendedDiv selectedElements={choices} />
    </div>
  );
};

export default RecommendationOptions;
