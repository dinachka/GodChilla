import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrentEvent from '../Event/Event';
import { PUBLIC_EVENTS_FETCH } from '../../redux/actionTypes/eventAT'

function EventsList(props) {
  const dispatch = useDispatch()
  const creativeRef = useRef()
  const natureRef = useRef()
  const cultureRef = useRef()
  const cafeRef = useRef()
  const walkRef = useRef()
  const sportRef = useRef()
  const cozyRef = useRef()
  const dateInput = useRef()
  const relationRef = useRef()
  const { events } = useSelector(state => state.eventReducer)

  useEffect(() => {
    dispatch({ type: PUBLIC_EVENTS_FETCH })
  },[dispatch])
  const [filtredEvents, setFilter] = useState(events)
  useEffect(() => {
    setFilter(events)
  }, [events])

  const filferHandler = () => {
    const category = [creativeRef, natureRef, cultureRef, cafeRef, walkRef, sportRef, cozyRef]
    .filter(el => el.current.checked)
    .map(el => +el.current.value)
    if (relationRef.current.value === "all") {
      setFilter(events) 
    } else {
      setFilter(() => {
       return events.filter(el => {
         return (relationRef.current.value === "friend" ? el.User.isFriend : !el.User.isFriend) 
                 && category.includes(el.categoryID)
         })
        }
      )
    }
  }

  return (
    <>
    <form>
      <label>
        <select defaultValue="all" onChange={filferHandler} ref={relationRef} required >
          <option value="all">Все</option>
          <option value="friend">мои друзья</option>
          <option value="notFriend">не добавлены в друзья</option>
        </select>
      </label>
    </form>
     <form>
      <label>посиделки<input type="checkbox" ref={cozyRef} onChange={filferHandler} defaultChecked="checked" value={1}/></label>
      <label>отдых на природе<input type="checkbox" ref={natureRef} onChange={filferHandler} defaultChecked="checked" value={2}/></label>
      <label>культура, зрелищные мероприятия<input type="checkbox" onChange={filferHandler} defaultChecked="checked" ref={cultureRef} value={3}/></label>
      <label>прогулка/поездка<input type="checkbox" ref={walkRef} onChange={filferHandler} defaultChecked="checked" value={4}/></label>
      <label>активный отдых, спорт<input type="checkbox" onChange={filferHandler} defaultChecked="checked" ref={sportRef} value={5}/></label>
      <label>творчество<input type="checkbox" ref={creativeRef} onChange={filferHandler} defaultChecked="checked" value={6}/></label> 
      <label>кафе, бар, ресторан<input type="checkbox" ref={cafeRef} onChange={filferHandler} defaultChecked="checked" value={7}/></label>
    </form>
      <label className='eventCreatorForm'>Дата проведения 
        <input ref={dateInput} className='eventCreatorForm' type="date"/>
      </label>
      {/* { events?.length && events.map( el => <CurrentEvent key={el.id} event={el}/>)} */}
      { filtredEvents?.length && filtredEvents.map( el => <CurrentEvent key={el.id} event={el}/>) }
    </>
  );
}

export default EventsList;
