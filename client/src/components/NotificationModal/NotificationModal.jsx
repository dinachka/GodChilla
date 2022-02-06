import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

function NotificationModal() {

  const friendsNotifications = useSelector(state => state.friendsReducer)
  const eventssNotifications = useSelector(state => state.eventsReducer)

  return (
    <div>
      {friendsNotifications?.length ? friendsNotifications.map(el => <userCard key={el.id} user={el} />) : "Уведомлений от друзей нет"}
    </div>
  )
}

export default NotificationModal
