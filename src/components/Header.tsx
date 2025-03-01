import { Link, useNavigate } from "react-router-dom";
import "@/assets/header.scss";
import Button from "./common/Button";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [showGnb, setShowGnb] = useState(false);

  const handleCloseMenu = () => {
    setShowGnb(!showGnb);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <h1 className="logo">
            <Link to="/">
              <img src="/images/logo.svg" alt="로고" />
            </Link>
          </h1>
          <nav className={`gnb ${showGnb && "show"}`}>
            <span className="menu-top">
              <img src="/images/logo.svg" className="logo-icon" />
              <button
                type="button"
                className="close-menu-btn"
                onClick={handleCloseMenu}
              >
                메뉴닫기
              </button>
            </span>
            <ul>
              {/* <li>
                <Link to="/LikeMovie" onClick={handleCloseMenu}>
                  내가 좋아하는 영화
                </Link>
              </li> */}
              <li>
                <Link to="/Search" onClick={handleCloseMenu}>
                  영화 찾아보기
                </Link>
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
          <button type="button" className="menu-btn" onClick={handleCloseMenu}>
            메뉴열기
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
