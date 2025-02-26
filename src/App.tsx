import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import LikeMovie from "./pages/LikeMovie";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/Login" || location.pathname === "/SignUp";

  return (
    <div className={`${isAuthPage ? "" : "page-bottom-padding"}`}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LikeMovie" element={<LikeMovie />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Detail" element={<Detail />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
