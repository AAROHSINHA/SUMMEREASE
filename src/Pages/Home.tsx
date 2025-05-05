import Cover from "../Components/Cover";
// import HomeBrowse from "../Components/HomeBrowse";
import HomeBooks from "../Components/HomeBooks";
// import HomeSummary from "../Components/HomeSummary";
import HomeBrowse2 from "../Components/HomeBrowse2";
// import HomeSummary from "../Components/HomeSummary";
import HomeSummary2 from "../Components/HomeSummary2";
import HomeRecommendation from "../Components/HomeRecommendation";

const Home = () => {
  return (
    <div>
      <Cover />
      <HomeBooks />
      <HomeBrowse2 />
      <HomeSummary2 />
      <HomeRecommendation />
    </div>
  );
};

export default Home;
