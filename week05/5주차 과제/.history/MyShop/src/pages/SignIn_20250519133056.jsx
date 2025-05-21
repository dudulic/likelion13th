import { useForm } from "react-hook-form";
import Button from "../components/Button";

const SignIn = () => {
  const {
    register, // 입력 필드를 폼 상태와 연결
    handleSubmit, // 제출 시 실행할 핸들러
    formState: { errors, isValid }, // 에러 객체와 유효성 검사 결과
    reset, // 폼 초기화 함수
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      birth: "",
      password: "",
    },
  });

  // 제출 성공시 실행되는 함수
  const onSubmit = (data) => {
    alert("회원가입이 완료되었습니다!");
    console.log(data);
    reset(); // 폼 초기화
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 ">
      <div className="px-4 py-8 mx-auto max-w-md w-full rounded-lg shadow-md">
        <h1 className="text-2xl font-bold m-8 text-center">회원가입</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="on"
          className="space-y-6"
        >
          {/* 이름 입력 */}
          <div>
            <label className="form-label">이 름</label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="이 름"
              {...register("name", { required: "이름을 입력해주세요" })}
              className="input"
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          {/* 전화번호 입력 */}
          <div>
            <label className="form-label">전 화 번 호</label>
            <input
              type="tel"
              name="tel"
              autoComplete="tel"
              placeholder="전 화 번 호"
              {...register("phone", {
                required: "전화번호를 입력해주세요",
                pattern: {
                  value: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
                  message:
                    "올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)",
                },
              })}
              className="input"
            />
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </div>

          {/* 이메일 입력 */}
          <div>
            <label className="form-label">이 메 일</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="이메일"
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "유효한 이메일 주소를 입력해주세요",
                },
              })}
              className="input"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          {/* 생년월일 입력 */}
          <div>
            <label className="form-label">생 년 월 일</label>
            <input
              type="date"
              name="birth"
              autoComplete="bday"
              placeholder="생 년 월 일"
              {...register("birth", {
                required: "생년월일을 입력해주세요",
                validate: (value) => {
                  const today = new Date();
                  const birthDate = new Date(value);
                  const age = today.getFullYear() - birthDate.getFullYear();
                  return age >= 14 || "14세 이상만 회원가입이 가능합니다";
                },
              })}
              className="input"
            />
            {errors.birth && (
              <p className="error-message">{errors.birth.message}</p>
            )}
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <label className="form-label">비 밀 번 호</label>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="비 밀 번 호"
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
                  message:
                    "비밀번호는 8-16자리이며, 영문·숫자·특수문자를 포함해야 합니다",
                },
              })}
              className="input"
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          {/* 제출 버튼 : 폼이 유효하지 않으면 비활성화 됨 */}
          <Button type="submit" variant="SignIn" disabled={!isValid}>
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
