import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import LikeMovie from "./pages/LikeMovie";
import SearchMovie from "./pages/SearchMovie";
import Detail from "./pages/Detail";
import Login from "./pages/login";
import SignUp from "./pages/Signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/LikeMovie" element={<LikeMovie />} />
        <Route path="/SearchMovie" element={<SearchMovie />} />
        <Route path="/Detail" element={<Detail />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
