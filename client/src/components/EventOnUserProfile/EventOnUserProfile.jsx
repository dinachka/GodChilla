import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DELETE_EVENT } from '../../redux/actionTypes/eventAT';
import { useNavigate } from 'react-router-dom';
import { cancelForeignEventsOnProfileAsyncAC } from '../../redux/actionCreatorsAsync/eventsACAsync'
import EditForm from '../EditForm/EditForm';
import { Link } from 'react-router-dom';
import './EventOnUserProfile.css'

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
    // navigate('/events');
  };

  const rejectEvent = () => {
    dispatch(cancelForeignEventsOnProfileAsyncAC(event.id))
  }
  return (

    <div className="uk-card uk-card-default eventProfile_box">
      <div className='eventProfile_box__image'>
        {event.photo ? (
          <img
            className='eventProfile_box__image__contain'
            src={event.photo}
            alt="not found"
          ></img>
        ) : (
          <img
            className='eventProfile_box__image__contain'
            src={`/pictures/${event.categoryID}.jpg`} alt="not found"></img>
        )}
      </div>
      <div className='uk-card-body eventProfile_box__cardBody'>
        {!editFormVision && (
          <div>
            <h6 className='uk-card-title'> Название встречи: {event.title} </h6>
            <div> Описание: {event.description} </div>
            <div> Место: {event.location} </div>
            <div> Дата: {event.dateTime} </div>

            <div>
              Автор:
              <Link to={`/profile/user/${event['User.id']}`} >
              {event['User.name']} {event['User.lastName']}{' '}</Link></div>
          </div>
        )}
        {editFormVision && <EditForm key={event.id} switcher={editFormVisionSwitcher} event={event} />}

        <div className='eventProfile_box__buttons'>
          {session.user.id === event.userID ? (editFormVision ? (
            <button className='uk-button uk-button-default eventProfile_box__buttons__style' onClick={editFormVisionSwitcher}>Отменить изменения</button>
          ) : (
            <>
              <button className='uk-button uk-button-default eventProfile_box__buttons__style' onClick={editFormVisionSwitcher}>Изменить событие</button>
              <button className='uk-button uk-button-default eventProfile_box__buttons__style' onClick={deleteHandle}>Удалить событие</button>
            </>
          ))
            : <button className='uk-button uk-button-default eventProfile_box__buttons__style' onClick={rejectEvent}>Отменить участие</button>}
        </div>
      </div>
    </div>

  );
}

export default EventOnUserProfile;
