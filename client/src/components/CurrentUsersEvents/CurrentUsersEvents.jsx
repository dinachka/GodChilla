import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventOnUserProfile from '../EventOnUserProfile/EventOnUserProfile';
import { INIT_USERS_EVENTS_FETCH } from '../../redux/actionTypes/eventAT'

function CurrentUsersEvents(props) {
  const dispatch = useDispatch()
  const userEvents = useSelector(state => state.eventReducer.userEvents)
  console.log(userEvents);
  useEffect(() => {
    dispatch({ type: INIT_USERS_EVENTS_FETCH })
  },[dispatch])
  
  return (
    <>
      { userEvents?.length && userEvents.map( el => <EventOnUserProfile key={el.id} event={el}/>)}
    </>
  );
}

export default CurrentUsersEvents;
