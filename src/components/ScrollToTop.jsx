import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try smooth scrolling first
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    // Fallback for browsers that don't support smooth scroll
    setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    }, 300);
  }, [pathname]);

  return null;
};

export default ScrollToTop;