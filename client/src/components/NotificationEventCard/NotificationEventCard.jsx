import React from 'react';
import { useDispatch } from 'react-redux';
import { acceptEventsRequestsNotificationsAsyncAC, rejectEventsRequestsNotificationsAsyncAC } from '../../redux/actionCreatorsAsync/eventsACAsync'


function NotificationEventCard({ event }) {
console.log(event, 'event');
  const key = Object.values(event)
  const dispatch = useDispatch()

  const acceptEventRequest = () => {
    dispatch(acceptEventsRequestsNotificationsAsyncAC(event))
  }

  const rejectEventRequest = () => {
    dispatch(rejectEventsRequestsNotificationsAsyncAC(event))
  }

  return (
    <>
    <div>
      пользователь {key[19]} {key[20]} хочет учавствовать в "{key[9]}"
      Вы можете <button onClick={acceptEventRequest}>принять</button> или <button onClick={rejectEventRequest}>отклонить</button> запрос
    </div>
    </>
  );
}

export default NotificationEventCard;
