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
      {button ? <button onClick={(() => setButton(!true))}>участвовать</button> : <button onClick={(() => setButton(!false))}>отозвать заявку</button> }

      <br/>
    </h5>
  );
}

export default ParticularUserEventsForFriends;
