import Button from "../components/common/Button";
import Input from "../components/common/Input";
import MainTitle from "../components/common/MainTitle";
import "@/assets/signup.scss";

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-wrap">
        <MainTitle title="회원가입" marginBottom="6rem" textAlign="center" />
        <form className="sign-up-form">
          <span className="inp-box">
            <Input type="text" placeholder="아이디를 입력하세요." />
            <Button text="중복확인" />
            <p className="message success">올바른 이메일 형식입니다.</p>
          </span>
          <span className="inp-box">
            <Input type="password" placeholder="비밀번호를 입력하세요." />
            <p className="message failed">잘못된 비밀번호 형식입니다.</p>
          </span>
          <span className="inp-box">
            <Input type="password" placeholder="비밀번호를 다시 입력하세요." />
          </span>
          <span className="inp-box">
            <Input type="text" placeholder="이름을 입력하세요." />
          </span>
          <div className="certification-wrap">
            <div className="mobile-carriers-list">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input type="radio" id="skt" name="mobile-carriers" />
                      <label htmlFor="skt">SKT</label>
                    </td>
                    <td>
                      <input type="radio" id="kt" name="mobile-carriers" />
                      <label htmlFor="kt">KT</label>
                    </td>
                    <td>
                      <input type="radio" id="lgt" name="mobile-carriers" />
                      <label htmlFor="lgt">LGT</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        id="skt-mvno"
                        name="mobile-carriers"
                      />
                      <label htmlFor="skt-mvno">SKT 알뜰폰</label>
                    </td>
                    <td>
                      <input type="radio" id="kt-mvno" name="mobile-carriers" />
                      <label htmlFor="kt-mvno">KT 알뜰폰</label>
                    </td>
                    <td>
                      <input
                        type="radio"
                        id="lgt-mvno"
                        name="mobile-carriers"
                      />
                      <label htmlFor="lgt-mvno">LGT 알뜰폰</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span className="inp-box">
              <Input type="number" placeholder="휴대폰 번호를 입력하세요." />
              <Button text="인증번호 전송" />
            </span>
            <span className="inp-box">
              <Input type="number" placeholder="인증번호를 입력하세요." />
              <Button text="인증번호 확인" />
            </span>
          </div>
          <Button text="회원가입" width="100%" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
