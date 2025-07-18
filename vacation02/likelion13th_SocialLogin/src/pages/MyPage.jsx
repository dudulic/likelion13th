export const MyPage = () => {
  return (
    <main className="flex flex-col items-center justify-center flex-1 bg-white px-4 text-center">
      <h1 className="text-2xl font-bold text-main mb-4">마이페이지</h1>
      <p className="text-base text-gray-700 mb-6">
        로그인한 사용자만 접근할 수 있습니다.
      </p>
    </main>
  );
};
