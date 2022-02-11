import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PastEvent from '../PastEvent/PastEvent';
import { initPastEventsOnProfileAsyncAC } from '../../redux/actionCreatorsAsync/eventsACAsync'

function PastEvents(props) {
  const dispatch = useDispatch()
  const pastEvents = useSelector(state => state.eventReducer.otherEvents.myPastEvents)
  useEffect(() => {
    dispatch(initPastEventsOnProfileAsyncAC())
  },[dispatch])
  pastEvents?.length && dispatch(initPastEventsOnProfileAsyncAC())

  return (
    <>
    <h3>ваши прошедшие события</h3>
      { pastEvents?.length ? pastEvents.map( el => <PastEvent key={el.id} event={el}/>) : 'У вас еще нет событий в архиве'}
    </>
  );
  
}

export default PastEvents;
