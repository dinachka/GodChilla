import { useSelector } from 'react-redux';

export const Dialogs = () => {
  const friends = useSelector(state => state.friendsReducer.friends);
  console.log(friends);
  return <>dialogs</>;
};
