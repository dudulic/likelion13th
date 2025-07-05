// 가운데 피드 사진 들어가는 곳
export const FeedImage = ({ feedImg }) => {

    return(
    <div className="flex-1 bg-[#D9D9D9] flex items-center justify-center h-[468px]">
      <img src={feedImg} alt="feed" className="object-cover w-full h-full" />
    </div>
    )
};