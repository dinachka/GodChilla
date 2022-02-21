import React from 'react';
import { useDispatch } from 'react-redux';
import { acceptEventsRequestsNotificationsAsyncAC, rejectEventsRequestsNotificationsAsyncAC } from '../../redux/actionCreatorsAsync/eventsACAsync'
import './notif_event.css';


function NotificationEventCard({ event }) {

  const key = Object.values(event)
  const dispatch = useDispatch()

  const acceptEventRequest = () => {
    dispatch(acceptEventsRequestsNotificationsAsyncAC(event))
  }

  const rejectEventRequest = () => {
    dispatch(rejectEventsRequestsNotificationsAsyncAC(event))
  }

  return (
    <div className='event_modal_container'>
      <div className='words_event'>
        {key[19]} {key[20]} и "{key[9]}"
      </div>
        <div className='buttons_container'>
        <button className='but_event_modal uk-button uk-button-default' onClick={acceptEventRequest}>принять</button> <button onClick={rejectEventRequest} className='but_event_modal uk-button uk-button-default' >отклонить</button>
      </div>
    </div>
  );
}

export default NotificationEventCard;
