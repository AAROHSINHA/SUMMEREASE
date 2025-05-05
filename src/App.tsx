import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
// import GetSummaries from "./Pages/GetSummaries";
import ComparePrices from "./Pages/ComparePrices";
import AboutUs from "./Pages/AboutUs";
import Book from "./Pages/Book";
import GetRecommendations from "./Pages/GetRecommendations";
import Footer from "./Components/Footer";
import ScrollToTop from "./Pages/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar is shared across all pages */}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/get-recommendations" element={<GetRecommendations />} />
        <Route path="/compare-prices" element={<ComparePrices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
