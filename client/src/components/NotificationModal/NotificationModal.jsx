import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './notificationModal.css';
import { initFriendsRequestNotificatiosnAsyncAC } from '../../redux/actionCreatorsAsync/friendsACAsync'
import { eventsRequestsNotificationsAsyncAC } from '../../redux/actionCreatorsAsync/eventsACAsync';
import NotificationFriendCard from '../NotificationFriendCard/NotificationFriendCard';
import NotificationEventCard from '../NotificationEventCard/NotificationEventCard';
function NotificationModal() {

  const friendsNotifications = useSelector(state => state.friendsReducer.notifications)
  const eventsNotifications = useSelector(state => state.eventReducer.notifications.participations)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initFriendsRequestNotificatiosnAsyncAC())
    }, [dispatch])

    useEffect(() => {
      dispatch(eventsRequestsNotificationsAsyncAC())
      }, [dispatch])
  return (
    <div className='notificationModal'>
      {friendsNotifications?.length ? friendsNotifications.map(friend => <NotificationFriendCard key={friend.id} user={friend} />) : "Уведомлений от друзей нет"}
      <div className='bottomLine'></div>
      {eventsNotifications?.length ? eventsNotifications.map(event => <NotificationEventCard key={event.id} event={event} />) : "Запросов на участие в ваших событиях нет"}
      <h3>MODALO4KО</h3>
    </div>
  )
}

export default NotificationModal
