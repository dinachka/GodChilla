import React from 'react';
import { useDispatch } from 'react-redux';
import { acceptFriendshipAsyncAC, rejectFriendshipAsyncAC } from '../../redux/actionCreatorsAsync/friendsACAsync';

function NotificationFriendCard({user}) {
const dispatch = useDispatch()
  const acceptFriendship = () => {
    dispatch(acceptFriendshipAsyncAC(user))
  }
  console.log(user.name);

  const rejectFriendship = () => {
    dispatch(rejectFriendshipAsyncAC(user))
  }
  return (
    <>
    <div>
      {user.name} {user.lastName}
      <button onClick={acceptFriendship}>Принять</button> <button onClick={rejectFriendship}>Отклонить</button>
    </div>
    </>
  );
}

export default NotificationFriendCard;
