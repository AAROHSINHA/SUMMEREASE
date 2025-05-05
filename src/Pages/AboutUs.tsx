import { Github, Linkedin, Twitter } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <h1 className="text-6xl font-black text-gray-900 mb-16 tracking-tighter overflow-hidden">
        SUMMER_EASE_
      </h1>

      {/* Content Container */}
      <div className="max-w-2xl space-y-20">
        {/* Features Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2 border-gray-200">
            WHAT IT DOES
          </h2>

          <ul className="space-y-6 text-lg">
            <li className="flex items-start">
              <span className="text-orange-500 font-black mr-3 text-xl">—</span>
              <span>Generates comprehensive book summaries</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-black mr-3 text-xl">—</span>
              <span>Recommends books tailored to your interests</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-black mr-3 text-xl">—</span>
              <span>Suggests books based on mood and genre</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-black mr-3 text-xl">—</span>
              <span>Provides intuitive book browsing</span>
            </li>
          </ul>
        </div>

        {/* Developer Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2 border-gray-200">
            ABOUT
          </h2>

          <div className="space-y-2">
            <p className="text-xl font-medium">Developed by Aaroh Sinha</p>
            <p className="text-gray-600 italic">
              Electronics Student & Developer
            </p>
          </div>

          <div className="flex space-x-8 justify-center pt-4">
            <a
              href="https://www.linkedin.com/in/aaroh-sinha-375a8a324/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="https://github.com/AAROHSINHA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Twitter className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
