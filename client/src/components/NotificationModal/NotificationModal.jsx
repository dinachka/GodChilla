import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './notificationModal.css';
import { initFriendsRequestNotificatiosnAsyncAC } from '../../redux/actionCreatorsAsync/friendsACAsync'
import NotificationFriendCard from '../NotificationFriendCard/NotificationFriendCard';
function NotificationModal() {

  const friendsNotifications = useSelector(state => state.friendsReducer.notifications)
  console.log(friendsNotifications, 'friendsNotifications');
  const eventssNotifications = useSelector(state => state.eventsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initFriendsRequestNotificatiosnAsyncAC())
    }, [dispatch])
  return (
    <div className='notificationModal'>
      {friendsNotifications?.length ? friendsNotifications.map(friend => <NotificationFriendCard key={friend.id} user={friend} />) : "Уведомлений от друзей нет"}
      <div className='bottomLine'></div>
      {eventssNotifications?.length ? eventssNotifications.map(event => <userCard key={event.id} user={event} />) : "Уведомлений о событиях нет"}
      <h3>MODALO4KA</h3>
    </div>
  )
}

export default NotificationModal
