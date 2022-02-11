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
          <h3 className='notification_of_friend'>предложения дружбы</h3>
          {friendsNotifications?.length ? friendsNotifications.map(friend => <NotificationFriendCard key={friend.id} user={friend} />) : <h4 className='notification_of_friend_answer' >заявок нет</h4> }
          <div className='bottomLine'></div>
          <h3 className='notification_of_event' >заявки на участие в ваших событиях</h3>
          {eventsNotifications?.length ? eventsNotifications.map(event => <NotificationEventCard key={event.id} event={event} />) : <h4 className='notification_of_event_answer'>"запросов нет"</h4> }
          <button className='modal_close_button uk-button uk-button-default' onClick={()=> handling(false)}>закрыть</button>
        </div>
        <div className='hidden_backside'></div>
    </>
  )
}

export default NotificationModal
