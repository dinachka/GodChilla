import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_DELETE_EVENT } from '../../redux/actionTypes/eventAT';
import EditForm from '../EditForm/EditForm';

function EventOnUserProfile({ event }) {
  const dispatch = useDispatch();
  const curEventId = event.id;

  const deleteHandle = event => {
    event.preventDefault();
    dispatch({ type: FETCH_DELETE_EVENT, payload: curEventId });
  };

  const [editFormVision, setEditFormVision] = useState(false);
  const editFormVisionSwitcher = () => {
    setEditFormVision(!editFormVision);
  };

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
        <div> Заголовок: {event.title} </div>
        <div> Локация: {event.location} </div>
        <div> Дата: {event.dateTime} </div>
        <div> Описание: {event.description} </div>
        {editFormVision && <EditForm key={event.id} event={event} />}
        <br />
        {editFormVision ? (
          <button onClick={editFormVisionSwitcher}>Отменить изменения</button>
        ) : (
          <button onClick={editFormVisionSwitcher}>Изменить событие</button>
        )}
        {!editFormVision && (
          <button onClick={deleteHandle}>Отменить событие</button>
        )}
      </div>
    </div>
  );
}

export default EventOnUserProfile;
