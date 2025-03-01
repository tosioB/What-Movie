import Button from "../components/common/Button";
import Input from "../components/common/Input";
import MainTitle from "../components/common/MainTitle";
import { useForm } from "react-hook-form";
import "@/assets/signup.scss";
import { useState } from "react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    watch
  } = useForm();
  const passwordValue = watch("password");

  const [showVerificationInput, setShowVerificationInput] = useState(false);

  return (
    <div className="sign-up-page">
      <div className="sign-up-wrap">
        <MainTitle title="회원가입" marginBottom="6rem" textAlign="center" />
        <form
          className="sign-up-form"
          noValidate
          onSubmit={handleSubmit(async (data) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(data));
          })}
        >
          {/* 이메일 */}
          <span className="inp-box">
            <Input
              type="email"
              placeholder="이메일을 입력하세요."
              {...register("email", {
                required: "이메일은 필수 입력사항 입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다."
                }
              })}
              aria-invalid={
                isSubmitted ? (errors.email ? "true" : "false") : undefined
              }
            />
            <Button text="중복확인" />
            {typeof errors.email?.message === "string" && (
              <p className="message failed">{errors.email.message}</p>
            )}
          </span>

          {/* 비밀번호 */}
          <span className="inp-box">
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요."
              {...register("password", {
                required: "비밀번호는 필수 입력사항 입니다.",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,16}$/,
                  message: "문자, 숫자, 특수문자를 최소 1개 이상 포함하세요."
                },
                minLength: {
                  value: 8,
                  message: "8자리 이상 비밀번호를 사용하세요."
                },
                maxLength: {
                  value: 16,
                  message: "16자리 이하 비밀번호를 사용하세요."
                }
              })}
              aria-invalid={
                isSubmitted ? (errors.password ? "true" : "false") : undefined
              }
            />
            {typeof errors.password?.message === "string" && (
              <p className="message failed">{errors.password.message}</p>
            )}
          </span>

          {/* 비밀번호 확인 */}
          <span className="inp-box">
            <Input
              type="password"
              placeholder="비밀번호를 다시 입력하세요."
              {...register("passwordConfirm", {
                required: "비밀번호 확인을 입력하세요.",
                validate: (value) =>
                  value === passwordValue || "비밀번호가 일치하지 않습니다."
              })}
              aria-invalid={
                isSubmitted
                  ? errors.passwordConfirm
                    ? "true"
                    : "false"
                  : undefined
              }
            />
            {typeof errors.passwordConfirm?.message === "string" && (
              <p className="message failed">{errors.passwordConfirm.message}</p>
            )}
          </span>

          {/* 이름 */}
          <span className="inp-box">
            <Input
              type="text"
              placeholder="이름을 입력하세요."
              {...register("name", {
                required: "이름을 입력하세요.",
                minLength: {
                  value: 2,
                  message: "이름은 최소 2글자 이상 입력해야 합니다."
                },
                maxLength: {
                  value: 5,
                  message: "이름은 최대 5글자까지만 입력 가능합니다."
                },
                pattern: {
                  value: /^[가-힣]{2,5}$/,
                  message: "이름은 한글 2~5글자로 입력하세요."
                }
              })}
              aria-invalid={
                isSubmitted ? (errors.name ? "true" : "false") : undefined
              }
            />
            {typeof errors.name?.message === "string" && (
              <p className="message failed">{errors.name.message}</p>
            )}
          </span>

          {/* 인증영역 */}
          <div className="certification-wrap">
            {/* 통신사 선택 */}
            <div className="mobile-carriers-list">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        id="skt"
                        value="skt"
                        {...register("carrier", {
                          required: "통신사를 선택하세요."
                        })}
                      />
                      <label htmlFor="skt">SKT</label>
                    </td>
                    <td>
                      <input
                        type="radio"
                        id="kt"
                        value="kt"
                        {...register("carrier", {
                          required: "통신사를 선택하세요."
                        })}
                      />
                      <label htmlFor="kt">KT</label>
                    </td>
                    <td>
                      <input
                        type="radio"
                        id="lgt"
                        value="lgt"
                        {...register("carrier", {
                          required: "통신사를 선택하세요."
                        })}
                      />
                      <label htmlFor="lgt">LGT</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        id="skt-mvno"
                        value="skt-mvno"
                        {...register("carrier", {
                          required: "통신사를 선택하세요."
                        })}
                      />
                      <label htmlFor="skt-mvno">SKT 알뜰폰</label>
                    </td>
                    <td>
                      <input
                        type="radio"
                        id="kt-mvno"
                        value="kt-mvno"
                        {...register("carrier", {
                          required: "통신사를 선택하세요."
                        })}
                      />
                      <label htmlFor="kt-mvno">KT 알뜰폰</label>
                    </td>
                    <td>
                      <input
                        type="radio"
                        id="lgt-mvno"
                        value="lgt-mvno"
                        {...register("carrier", {
                          required: "통신사를 선택하세요."
                        })}
                      />
                      <label htmlFor="lgt-mvno">LGT 알뜰폰</label>
                    </td>
                  </tr>
                </tbody>
              </table>
              {typeof errors.carrier?.message === "string" &&
                errors.carrier && (
                  <p className="message failed">{errors.carrier.message}</p>
                )}
            </div>

            {/* 휴대폰 번호 */}
            <span className="inp-box">
              <Input
                type="number"
                placeholder="휴대폰 번호를 입력하세요."
                {...register("phone", {
                  required: "휴대폰 번호를 입력하세요.",
                  pattern: {
                    value: /^[0-9]{10,11}$/,
                    message: "10~11자리 숫자만 입력 가능합니다."
                  }
                })}
                aria-invalid={
                  isSubmitted ? (errors.phone ? "true" : "false") : undefined
                }
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, ""); // 숫자만 입력 가능
                  if (e.target.value.length > 11) {
                    e.target.value = e.target.value.slice(0, 11); // 11자리 제한
                  }
                }}
                inputMode="numeric"
              />
              <Button
                text="인증번호 전송"
                onClick={(e) => {
                  e.preventDefault(); // 버튼 클릭 시 폼 제출 방지
                  setShowVerificationInput(true);
                }}
              />
              {typeof errors.phone?.message === "string" && (
                <p className="message failed">{errors.phone.message}</p>
              )}
            </span>

            {/* 인증번호 */}
            {showVerificationInput && (
              <span className="inp-box">
                <Input
                  type="number"
                  placeholder="인증번호를 입력하세요."
                  {...register("verificationCode", {
                    required: "인증번호를 입력하세요.",
                    pattern: {
                      value: /^[0-9]{6}$/, // 인증번호는 6자리 숫자
                      message: "6자리 숫자만 입력 가능합니다."
                    }
                  })}
                  aria-invalid={
                    isSubmitted ? (errors.phone ? "true" : "false") : undefined
                  }
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, ""); // 숫자만 입력 가능
                    if (e.target.value.length > 6) {
                      e.target.value = e.target.value.slice(0, 6); // 6자리 제한
                    }
                  }}
                  inputMode="numeric"
                />
                <Button text="인증번호 확인" />
                {watch("verificationCode") !== undefined &&
                  typeof errors.verificationCode?.message === "string" && (
                    <p className="message failed">
                      {errors.verificationCode.message}
                    </p>
                  )}
              </span>
            )}
          </div>
          <Button
            type="submit"
            text="회원가입"
            width="100%"
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
