import React from 'react';
import { useDispatch } from 'react-redux';
import { acceptFriendshipAsyncAC, rejectFriendshipAsyncAC } from '../../redux/actionCreatorsAsync/friendsACAsync';
import './notification_friend_style.css'

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
    <div className='user_modal_container'>
      <div className='user_words' >
        {user.name} {user.lastName}
      </div>
      <div className='buttons_container'>
        <button className='but_event_modal uk-button uk-button-default' onClick={acceptFriendship}>Принять</button>
        <button className='but_event_modal uk-button uk-button-default' onClick={rejectFriendship}>Отклонить</button>
      </div>
    </div>
  );
}

export default NotificationFriendCard;
