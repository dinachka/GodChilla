import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { joinEventFetchAC, cancelJoinEventFetchAC } from '../../redux/actionCreatorsAsync/eventsACAsync'

function CurrentEvent({ event }) {
  const dispatch = useDispatch()
  const clickJoinHandler = () => {
    dispatch(joinEventFetchAC({ eventID: event.id }))
  }
  const clickCancelJoinHandler = () => {
    dispatch(cancelJoinEventFetchAC(event.id))
  }
  console.log(event);
  return (

    <div className="uk-card uk-card-default" style={{ width: '80vw', display: 'flex', marginTop: '20px' }}>
      <div className="uk-card-header" style={{ display: 'flex', alignItems: 'center' }}>
        <Link to={`/profile/user/${event.User.id}`}>
          <div className="uk-grid-small uk-flex-middle" >
            {/* <div className="uk-grid-small uk-flex-middle" style={{ display: 'grid', gridTemplateColumns: '2fr 5fr' }}> */}
            <div className="uk-width-auto">
              {event.User.photo && (
                <img
                  style={{ width: "100px", height: "110px", borderRadius: '5px', marginRight: '20px' }}
                  src={event.User.photo}
                  alt="event img"
                />
              )}
            </div>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">{event.User.name}</h3>
              <p className="uk-text-meta uk-margin-remove-top"> {event.User.lastName}</p>
            </div>
          </div>
        </Link>
      </div>


      <div style={{ display: 'flex' }}>
        <div className="uk-card-body">
          {event?.photo ? (
            <img style={{ height: '20rem', width: '40rem', objectFit: 'cover' }}
              src={event.photo}
              alt="not found"
            ></img>
          ) : (
            <img style={{ height: '20rem', width: '40rem', objectFit: 'cover' }}
              src={`/pictures/${event.categoryID}.jpg`} alt="not found"></img>
          )}
        </div>

        <div className="uk-card-body" style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
          <p><b>Название встречи:</b> {event.title} </p>
          <p><b>Описание: </b>{event.description} </p>
          <p><b>Место:</b> {event.location} </p>
          <p><b> Дата: </b>{event.dateTime} </p>
          <div className="uk-card-footer">
            {event.status === 'В обработке' ? <button className='uk-button uk-button-default' onClick={clickCancelJoinHandler}>Не участвовать</button>
              : <button onClick={clickJoinHandler} className="uk-button uk-button-default">Присоединиться</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentEvent;
