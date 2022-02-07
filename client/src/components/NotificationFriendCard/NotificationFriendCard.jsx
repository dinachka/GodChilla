import React from 'react';
import { useDispatch } from 'react-redux';

function NotificationFriendCard({user}) {
const dispatch = useDispatch()

  const acceptFriendship = () => {
    dispatch()
  }

  const rejectFriendship = () => {
    dispatch()
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
