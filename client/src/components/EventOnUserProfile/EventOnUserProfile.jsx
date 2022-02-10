import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DELETE_EVENT } from '../../redux/actionTypes/eventAT';
import { useNavigate } from 'react-router-dom';
import { cancelForeignEventsOnProfileAsyncAC } from '../../redux/actionCreatorsAsync/eventsACAsync'
import EditForm from '../EditForm/EditForm';
import { Link } from 'react-router-dom';

function EventOnUserProfile({ event }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const curEventId = event.id;
  const session = useSelector(state => state.userReducer)
  const [editFormVision, setEditFormVision] = useState(false);
  const editFormVisionSwitcher = () => {
    setEditFormVision(!editFormVision);
  };

  const deleteHandle = event => {
    event.preventDefault();
    dispatch({ type: FETCH_DELETE_EVENT, payload: curEventId });
    navigate('/events');
  };

  const rejectEvent = () => {
    dispatch(cancelForeignEventsOnProfileAsyncAC(event.id))
  }
  return (
    <div>
      <div>
        {event.photo ? (
          <img
            src="https://pbs.twimg.com/profile_images/445338647261229056/Gf5tt71x_400x400.jpeg"
            alt="not found"
          ></img>
        ) : (
          <img src={`/pictures/${event.categoryID}.jpg`} alt="not found"></img>
        )}
        {!editFormVision && (
          <div>
            <div> Название встречи: {event.title} </div>
            <div> Описание: {event.description} </div>
            <div> Место: {event.location} </div>
            <div> Дата: {event.dateTime} </div>
            {/* <div>
              {' '}
              Автор:
              <Link to={`/profile/user/${event.User.id}`} />
              {' '}
              {event.User.name} {event.User.lastName}{' '}</div> */}

          </div>
        )}
        {editFormVision && <EditForm key={event.id} event={event} />}
        <br />
        {session.user.id === event.userID ? (editFormVision ? (
          <button onClick={editFormVisionSwitcher}>Отменить изменения</button>
        ) : (
          <>
            <button onClick={editFormVisionSwitcher}>Изменить событие</button>
            <button onClick={deleteHandle}>Удалить событие</button>
          </>
        ))
          : <button onClick={rejectEvent}>Отменить участие</button>}
      </div>
    </div>
  );
}

export default EventOnUserProfile;
