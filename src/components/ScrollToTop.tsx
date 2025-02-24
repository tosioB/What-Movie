import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // ✅ pathname이 변경될 때 스크롤 맨 위로

  return null;
};

export default ScrollToTop;
