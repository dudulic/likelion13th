import { useParams } from 'react-router-dom';

export const Profile = () => {
  const { name } = useParams();
  return <main>{name}의 프로필 페이지</main>;
};
