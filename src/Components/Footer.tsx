import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white font-sans py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left side - Site Title */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">SUMMER_EASE_</h2>
          </div>

          {/* Right side - Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Site Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Site Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/browse"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Browse Books
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-recommendations"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Get Book Recommendations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/compare-prices"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Compare Prices
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Know More
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/aaroh-sinha-375a8a324/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gray-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AAROHSINHA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gray-300 transition-colors"
                  >
                    <Instagram className="w-4 h-4 mr-2" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gray-300 transition-colors"
                  >
                    <Twitter className="w-4 h-4 mr-2" /> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
