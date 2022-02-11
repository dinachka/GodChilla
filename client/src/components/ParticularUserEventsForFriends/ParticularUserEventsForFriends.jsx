import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function ParticularUserEventsForFriends({ event }) {
  const [button, setButton] = useState(true)
  const buttonSwitch = () => {
    setButton(button)
  }

  return (
    <h5>
      <p>Название встречи: {event.title}</p>
      <p>Описание: {event.description}</p>
      <p>Место: {event.location}</p>
      {event?.photo && <img className='eventProfile_box__image__contain' src={event.photo} alt=""none/>}
      {button ? <button className='uk-button uk-button-default eventProfile_box__buttons__style' onClick={(() => setButton(!true))}>участвовать</button> : <button className='uk-button uk-button-default eventProfile_box__buttons__style' onClick={(() => setButton(!false))}>отозвать заявку</button> }

      <br/>
    </h5>
  );
}

export default ParticularUserEventsForFriends;
