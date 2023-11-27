// components/ProgressBar.js

import { useEffect, useState } from "react";

const PageProgessBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (position / totalHeight) * 100;
    setScrollPosition(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-300">
      <div
        className="h-1 bg-blue-500 transition-all duration-300"
        style={{ width: `${scrollPosition}%` }}
      ></div>
    </div>
  );
};

export default PageProgessBar;
