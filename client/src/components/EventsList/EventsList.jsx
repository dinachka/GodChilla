import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrentEvent from '../Event/Event';
import { PUBLIC_EVENTS_FETCH } from '../../redux/actionTypes/eventAT'

function EventsList(props) {
  const dispatch = useDispatch()
  const { events } = useSelector(state => state.eventReducer)
  useEffect(() => {
    dispatch({ type: PUBLIC_EVENTS_FETCH })
  },[dispatch])
  
  return (
    <>
      { events?.length && events.map( el => <CurrentEvent key={el.id} event={el}/>)}
    </>
  );
}

export default EventsList;
