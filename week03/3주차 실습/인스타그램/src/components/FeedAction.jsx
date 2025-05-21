import dmIcon from '../assets/direct message.svg';
import commentIcon from '../assets/icon_comment.svg';
import bookmarkIcon from '../assets/icon_mookmark.svg';
import likeIcon from '../assets/like.svg';
// FeedActions 컴포넌트
export const FeedAction = ({ likes, onLike }) => {
  return (
    <div className="flex-none flex flex-col h-[83px] justify-end">
      <div className="flex flex-row items-center justify-between px-[16px] pb-[14px]">
        <div className="flex flex-row gap-[13px]">
          <img
            src={likeIcon}
            alt="like"
            onClick={onLike}
            className="w-[22px] h-[22px]"
          />
          <img src={commentIcon} alt="comment" className="w-[22px] h-[22px]" />
          <img src={dmIcon} alt="share" className="w-[22px] h-[22px]" />
        </div>
        <img src={bookmarkIcon} alt="bookmark" className="w-[22px] h-[22px]" />
      </div>
      <div className="pl-[16px] pb-[13px] font-bold text-[14px]">
        좋아요 {likes}개
      </div>
    </div>
  );
};
