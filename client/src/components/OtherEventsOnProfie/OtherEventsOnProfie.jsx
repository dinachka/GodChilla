import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import EventOnUserProfile from '../EventOnUserProfile/EventOnUserProfile';
import { initOtherEventsOnProfileAsyncAC } from '../../redux/actionCreatorsAsync/eventsACAsync'

function OtherEventsOnProfie(props) {
  const dispatch = useDispatch()
  const events = useSelector(state => state.eventReducer.otherEvents)
  const filteredEvents = events?.length && events.filter((el) => !el.status)
  console.log(filteredEvents);

  useEffect(() => {
    dispatch(initOtherEventsOnProfileAsyncAC())
  }, [dispatch], events)
  return (
    <div>
      <h3>чужие события в которых вы участвуете</h3>
      {filteredEvents?.length ?
        filteredEvents.map(event => < EventOnUserProfile key={event.id} event={event} />)
        : "вы не учавствуете ни в одном чужом событии"}
    </div>
  );
}

export default OtherEventsOnProfie;
