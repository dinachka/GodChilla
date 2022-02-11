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

  const [filtredEvents, setFilter] = useState(events)
  const [needFilter, setNeedFilter] = useState(false)

  useEffect(() => {
    dispatch({ type: PUBLIC_EVENTS_FETCH })
  }, [dispatch])

  useEffect(() => {
    setFilter(events)
  }, [events])

  const filferHandler = () => {
    const category = [creativeRef, natureRef, cultureRef, cafeRef, walkRef, sportRef, cozyRef]
      .filter(el => el.current.checked)
      .map(el => +el.current.value)

    setFilter(() => {
      return events.filter(el => {
        return (relationRef.current.value === "friend" ? el.User.isFriend :
          relationRef.current.value === "notFriend" ? !el.User.isFriend : true)
          && category.includes(el.categoryID)
          && (dateInput.current.value ? dateInput.current.value === el.dateTime : true)
      })
    }
    )
  }

  const dropDateHandler = () => {
    dateInput.current.value = null;
    filferHandler();
  }

  return (
    <div div style={{ margin: '50px' }} >
      <button onClick={() => { setNeedFilter(!needFilter) }}>{needFilter ? "скрыть фильтр" : "фильтровать"}</button>
      {needFilter ?
        <>
          <form>
            <label>
              <select defaultValue="all" onChange={filferHandler} ref={relationRef} required >
                <option value="all">все события</option>
                <option value="friend">события друзей</option>
                <option value="notFriend">события не добавленных в друзья</option>
              </select>
            </label>
          </form>
          <form>
            <label>посиделки<input type="checkbox" ref={cozyRef} onChange={filferHandler} defaultChecked="checked" value={1} /></label>
            <label>отдых на природе<input type="checkbox" ref={natureRef} onChange={filferHandler} defaultChecked="checked" value={2} /></label>
            <label>культура, зрелищные мероприятия<input type="checkbox" onChange={filferHandler} defaultChecked="checked" ref={cultureRef} value={3} /></label>
            <label>прогулка/поездка<input type="checkbox" ref={walkRef} onChange={filferHandler} defaultChecked="checked" value={4} /></label>
            <label>активный отдых, спорт<input type="checkbox" onChange={filferHandler} defaultChecked="checked" ref={sportRef} value={5} /></label>
            <label>творчество<input type="checkbox" ref={creativeRef} onChange={filferHandler} defaultChecked="checked" value={6} /></label>
            <label>кафе, бар, ресторан<input type="checkbox" ref={cafeRef} onChange={filferHandler} defaultChecked="checked" value={7} /></label>
          </form>
          <label className='eventCreatorForm'>Дата проведения
            <input ref={dateInput} onChange={filferHandler} className='eventCreatorForm' type="date" />
          </label>
          <button onClick={dropDateHandler}>сбросить фильтр по дате</button>
          {filtredEvents?.length && filtredEvents.map(el => <CurrentEvent key={el.id} event={el} />)}
        </> : events?.length && events.map(el => <CurrentEvent key={el.id} event={el} />)
      }
    </div>
  );
}

export default EventsList;
