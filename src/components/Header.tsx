import { Link, useNavigate } from "react-router-dom";
import "@/assets/header.scss";
import Button from "./common/Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <h1 className="logo">
            <Link to="/">
              <img src="/images/logo.svg" alt="로고" />
            </Link>
          </h1>
          <nav className="gnb">
            <ul>
              <li>
                <Link to="/LikeMovie">내가 좋아하는 영화</Link>
              </li>
              <li>
                <Link to="/Search">영화 찾아보기</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <Button
            text="로그인"
            onClick={() => {
              navigate("/Login");
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
