import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrentEvent from '../Event/Event';
import { PUBLIC_EVENTS_FETCH } from '../../redux/actionTypes/eventAT'
import './eventList.css'

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
    <div style={{marginTop: "60px"}}>
       <h3 className="uk-heading-line uk-text-center" onClick={() => setNeedFilter(!needFilter)}>
        {needFilter ? <span className='first_span' uk-icon="chevron-up">фильтр</span>
          : <span className='first_span' uk-icon="chevron-down" >фильтр</span>}
      </h3>
    <div style={{ marginLeft: '10vw', marginTop: '50px' }} >
      {/* // <button className='uk-button uk-button-default eventProfile_box__buttons__style' onClick={() => { setNeedFilter(!needFilter) }}>{needFilter ? "скрыть фильтр" : "фильтровать"}</button> */}
      {needFilter ?
        <>
        <form >
          <label>
            <select defaultValue="all" onChange={filferHandler} ref={relationRef} required >
              <option value="all">все события</option>
              <option value="friend">события друзей</option>
              <option value="notFriend">события не добавленных в друзья</option>
            </select>
          </label>
        </form>
        <form >
          <div style={{display:'flex'}}><label style={{flexBasis: '50%'}}>посиделки</label><input style={{flexBasis: '50%'}} type="checkbox" ref={cozyRef} onChange={filferHandler} defaultChecked="checked" value={1}/></div> 
          <div style={{display:'flex'}}><label style={{flexBasis: '50%'}}>отдых на природе</label><input style={{flexBasis: '50%'}} type="checkbox" ref={natureRef} onChange={filferHandler} defaultChecked="checked" value={2}/></div>
          <div style={{display:'flex'}}><label style={{flexBasis: '50%'}}>культура, зрелищные мероприятия</label><input style={{flexBasis: '50%'}} type="checkbox" onChange={filferHandler} defaultChecked="checked" ref={cultureRef} value={3}/></div>
          <div style={{display:'flex'}}><label style={{flexBasis: '50%'}}>прогулка/поездка</label><input style={{flexBasis: '50%'}} type="checkbox" ref={walkRef} onChange={filferHandler} defaultChecked="checked" value={4}/></div>
          <div style={{display:'flex'}}><label style={{flexBasis: '50%'}}>активный отдых, спорт</label><input style={{flexBasis: '50%'}} type="checkbox" onChange={filferHandler} defaultChecked="checked" ref={sportRef} value={5}/></div>
          <div style={{display:'flex'}}><label style={{flexBasis: '50%'}}>творчество</label><input style={{flexBasis: '50%'}} type="checkbox" ref={creativeRef} onChange={filferHandler} defaultChecked="checked" value={6}/></div>
          <div style={{display:'flex'}}><label style={{flexBasis: '50%'}}>кафе, бар, ресторан</label><input style={{flexBasis: '50%'}} type="checkbox" ref={cafeRef} onChange={filferHandler} defaultChecked="checked" value={7}/></div>
        </form>
          <label className='eventCreatorForm'>Дата проведения 
            <input ref={dateInput} onChange={filferHandler} className='eventCreatorForm' type="date"/>
          </label>
          <button className='uk-button uk-button-default eventProfile_box__buttons__style' onClick={dropDateHandler}>сбросить фильтр по дате</button>
          {filtredEvents?.length && filtredEvents.map(el => <CurrentEvent key={el.id} event={el} />)}
        </> : events?.length && events.map(el => <CurrentEvent key={el.id} event={el} />)
      }
    </div>
  </div>
  );
}

export default EventsList;
