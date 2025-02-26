import Button from "../components/common/Button";
import Input from "../components/common/Input";
import "@/assets/login.scss";
import MainTitle from "../components/common/MainTitle";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-wrap">
        <MainTitle title="로그인" marginBottom="6rem" textAlign="center" />
        <form className="login-form">
          <Input type="text" placeholder="아이디를 입력하세요." />
          <Input type="password" placeholder="비밀번호를 입력하세요." />
          <Button text="로그인" width="100%" />
        </form>
        <ul className="user-join-list">
          <li>
            <a href="javascript:void(0)">이메일 찾기</a>
          </li>
          <li>
            <a href="javascript:void(0)">비밀번호 찾기</a>
          </li>
          <li>
            <Link to="/SignUp">회원가입</Link>
          </li>
        </ul>
        <ul className="social-btn-list">
          <li>
            <Button
              text="네이버로 시작"
              width="100%"
              backgroundColor="#03C75A"
              className="naver-btn"
            />
          </li>
          <li>
            <Button
              text="카카오로 시작"
              width="100%"
              backgroundColor="#FEE500"
              color="#000"
              className="kakao-btn"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
