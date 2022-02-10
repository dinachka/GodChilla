import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './notificationModal.css';
import { initFriendsRequestNotificatiosnAsyncAC } from '../../redux/actionCreatorsAsync/friendsACAsync'
import { eventsRequestsNotificationsAsyncAC } from '../../redux/actionCreatorsAsync/eventsACAsync';
import NotificationFriendCard from '../NotificationFriendCard/NotificationFriendCard';
import NotificationEventCard from '../NotificationEventCard/NotificationEventCard';


function NotificationModal({handling}) {

  const friendsNotifications = useSelector(state => state.friendsReducer.notifications)
  const eventsNotifications = useSelector(state => state.eventReducer.notifications)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initFriendsRequestNotificatiosnAsyncAC())
    }, [dispatch])

    useEffect(() => {
      dispatch(eventsRequestsNotificationsAsyncAC())
      }, [dispatch])
  return (
    <>
        <div className='notificationModal uk-animation-shake' >
          <h4>Заявки на добавление в друзья</h4>
          {friendsNotifications?.length ? friendsNotifications.map(friend => <NotificationFriendCard key={friend.id} user={friend} />) : "Заявок нет"}
          <div className='bottomLine'></div>
          <h4>заявки на принятия участия в ваших событиях</h4>
          {eventsNotifications?.length ? eventsNotifications.map(event => <NotificationEventCard key={event.id} event={event} />) : "Запросов на участие в ваших событиях нет"}
          <button className='modal_close_button' onClick={()=> handling(false)}>закрыть</button>
        </div>
        <div className='hidden_backside'></div>
    </>
  )
}

export default NotificationModal
