import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { joinEventFetchAC, cancelJoinEventFetchAC } from '../../redux/actionCreatorsAsync/eventsACAsync'

function CurrentEvent({ event }) {
  const dispatch = useDispatch()
  const clickJoinHandler = () => {
    dispatch(joinEventFetchAC({eventID: event.id}))
  }
  const clickCancelJoinHandler = () => {
    dispatch(cancelJoinEventFetchAC(event.id))
  }
  return (
    <div>
      {event.photo ? (
        <img
          src="https://pbs.twimg.com/profile_images/445338647261229056/Gf5tt71x_400x400.jpeg"
          alt="not found"
        ></img>
      ) : (
        <img src={`/pictures/${event.categoryID}.jpg`} alt="not found"></img>
      )}
      <div> Название встречи: {event.title} </div>
      <div> Описание: {event.description} </div>
      <div> Место: {event.location} </div>
      <div> Дата: {event.dateTime} </div>
      <div>
        {' '}
        Автор:
        <Link to={`/profile/user/${event.User.id}`}>
          {' '}
          {event.User.name} {event.User.lastName}{' '}
          {event.User.photo && (
            <img
              style={{ maxWeigth: '1', maxHeight: '1' }}
              src={event.User.photo}
              alt=""
            />
          )}
        </Link>
        {event.status === 'В обработке' ? <button onClick={clickCancelJoinHandler}>Не участвовать</button>
      : <button onClick={clickJoinHandler}>Присоединиться</button>
      }
      </div>
    </div>
  );
}

export default CurrentEvent;
