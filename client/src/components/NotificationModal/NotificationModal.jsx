import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './notificationModal.css';

function NotificationModal() {

  const friendsNotifications = useSelector(state => state.friendsReducer)
  const eventssNotifications = useSelector(state => state.eventsReducer)

  return (
    <div className='notificationModal'>
      {friendsNotifications?.length ? friendsNotifications.map(friend => <userCard key={friend.id} user={friend} />) : "Уведомлений от друзей нет"}
      <div className='bottomLine'></div>
      {eventssNotifications?.length ? eventssNotifications.map(event => <userCard key={event.id} user={event} />) : "Уведомлений о событиях нет"}
      <h3>MODALO4KA</h3>
    </div>
  )
}

export default NotificationModal
