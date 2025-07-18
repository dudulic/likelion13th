export const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center flex-1 bg-white px-4 text-center">
      <h1 className="text-2xl font-bold text-main mb-4">
        프론트엔드 3주차 방학 세션
      </h1>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">
        소셜 로그인 실습
      </h2>
      <p className="text-sm text-gray-500 leading-relaxed">
        실습 내용을 토대로 소셜 로그인 후 <br />
        장바구니 기능까지 구현해보세요!
      </p>
    </main>
  );
};
