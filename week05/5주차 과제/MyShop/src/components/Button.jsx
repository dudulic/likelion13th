import clsx from "clsx";

// 공통 버튼 컴포넌트
const Button = ({
  children,
  variant = "default",
  disabled = false,
  type = "button",
  className = "",
  ...props
}) => {
  // 공통 스타일
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // variant에 따라 다른 스타일 적용
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-green-400",
    Cart: "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer ph:text-sm dt:text-base",
    SignIn:
      "w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400 ph:text-base dt:text-lg",
  };

  // 최종 스타일
  const buttonStyles = clsx(
    baseStyles,
    variants[variant],
    variant === "SignIn" &&
      disabled &&
      "bg-gray-400 opacity-50 cursor-not-allowed",
    className
  );

  return (
    <button
      type={type} // 버튼 타입
      disabled={disabled} // 비활성화 여부
      className={buttonStyles} // 최종 스타일 적용
      {...props} // 나머지 속성들 전달
    >
      {children}
    </button>
  );
};

export default Button;
