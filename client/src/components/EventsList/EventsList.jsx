import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrentEvent from '../Event/Event';
import { PUBLIC_EVENTS_FETCH } from '../../redux/actionTypes/eventAT'

function EventsList(props) {
  const dispatch = useDispatch()
  const musicRef = useRef()
  const natureRef = useRef()
  const cultureRef = useRef()
  const relaxRef = useRef()
  const partyRef = useRef()
  const sportRef = useRef()
  const dateInput = useRef()

  const { events } = useSelector(state => state.eventReducer)
  useEffect(() => {
    dispatch({ type: PUBLIC_EVENTS_FETCH })
  },[dispatch])
  const privetStatus = () => {}
  const [filter, setFilter] = useState(events)
  const checkHandler = () => {
    console.log( musicRef.current?.value,
    natureRef.current?.value,
    cultureRef.current?.value,
    relaxRef.current?.value,
    partyRef.current?.value,
    sportRef.current?.value)
  }
  return (
    <>
    <form>
      <label>
        <select ref={privetStatus} required >
          <option value="public">Все</option>
          <option value="friend">Друзья</option>
        </select>
      </label>
    </form>
     <form onChecked={(value) => console.log(value)}>
      <label>Музыка<input type="checkbox" onChange={checkHandler} ref={musicRef} value={1}/></label>
      <label>Природа<input type="checkbox" ef={natureRef} onChange={checkHandler} value={2}/></label>
      <label>Культура<input type="checkbox" ef={cultureRef} onChange={checkHandler} value={3}/></label> 
      <label>Релакс<input type="checkbox" ef={relaxRef} onChange={checkHandler} value={4}/></label>
      <label>Вечеринки<input type="checkbox" ef={partyRef} onChange={checkHandler} value={5}/></label>
      <label>Активный отдых<input type="checkbox" ef={sportRef} onChange={checkHandler} value={6}/></label> 
    </form>
      <label className='eventCreatorForm'>Дата проведения 
        <input ref={dateInput} className='eventCreatorForm' type="date"/>
      </label>
      { events?.length && events.map( el => <CurrentEvent key={el.id} event={el}/>)}
    </>
  );
}

export default EventsList;
