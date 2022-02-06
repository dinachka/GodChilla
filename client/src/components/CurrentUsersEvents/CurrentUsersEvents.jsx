import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrentEvent from '../Event/Event';
import { INIT_USERS_EVENTS_FETCH } from '../../redux/actionTypes/eventAT'

function CurrentUsersEvents(props) {
  const dispatch = useDispatch()
  const { userEvents } = useSelector(state => state.eventReducer)
  useEffect(() => {
    dispatch({ type: INIT_USERS_EVENTS_FETCH })
  },[dispatch])
  
  return (
    <>
      { userEvents?.length && userEvents.map( el => <CurrentEvent key={el.id} event={el}/>)}
    </>
  );
}

export default CurrentUsersEvents;
