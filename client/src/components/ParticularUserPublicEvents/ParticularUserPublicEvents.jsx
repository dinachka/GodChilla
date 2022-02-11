import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { joinEventFetchAC, cancelJoinEventFetchAC } from '../../redux/actionCreatorsAsync/eventsACAsync'

function ParticularUserPublicEvents({ user }) {

const [button, setButton] = useState(true)
const buttonSwitch = () => {
  setButton(button)
}

  return (
    <h5>
      <p>Название встречи: {user.title}</p>
      <p>Описание: {user.description}</p>
      <p>Место: {user.location}</p>
      {button ? <button onClick={(() => setButton(!true))}>участвовать</button> : <button onClick={(() => setButton(!false))}>отозвать заявку</button> }
  
       <br/>
    </h5>
  );
}


export default ParticularUserPublicEvents;
