import React, { useState } from 'react';
import { initAnotherUserFetchAC, initAnotherUserEventsFetchAC } from '../../redux/actionCreatorsAsync/userACAsync';
import { addFriendshipFetchAC, deleteFriendshipFetchAC } from '../../redux/actionCreatorsAsync/friendsACAsync';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ParticularUserPublicEvents from '../ParticularUserPublicEvents/ParticularUserPublicEvents';
import ParticularUserEventsForFriends from '../ParticularUserEventsForFriends/ParticularUserEventsForFriends';
import './userProfile.css'

function UserProfile() {
  
  const {id} = useParams();
  const dispatch = useDispatch();
  const thisUser = useSelector(state => state.userReducer.anotherUser)
  const mainUser = useSelector(state => state.userReducer.user)
  
  const [calendarSwitcher, setCalendarSwitcher] = useState(true)
  const calendarSwitch = () => {
    setCalendarSwitcher(!calendarSwitcher)
  }
  
  const idForFriends = {
    reqUserID: mainUser.id,
    resUserID: id
  }
  
  useEffect(() => {
    dispatch(initAnotherUserFetchAC(id))
    dispatch(initAnotherUserEventsFetchAC(id))
  },[dispatch, id]);

  const addFriendHandler = () => {
    dispatch(addFriendshipFetchAC(idForFriends));
  }

  const deleteFriendHandler = () => {
    dispatch(deleteFriendshipFetchAC(id));
  }

  const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H81w4SmKH5DZmIbxU7EB0aMSkNQDoPQA1mRQxf2Y0wMF1NSa7vghbwwKASi1q4NPmNw&usqp=CAU'
  
  return (
    <div className='user_profile_main_box'>

    <div className='profile_info_container'>
          {thisUser.info?.photo ? <img className='avatar_img'src={thisUser.info?.photo} alt='none'/> : <img src={defaultAvatar} className='avatar_img_default' alt='none'/> }

       <div className='user_info_container' >
         <div className='user_info'>
            <div>Имя: <b className='span'>{thisUser.info?.name}</b></div>
            <br />
            <div>Фамилия: <b className='span'>{thisUser.info?.lastName}</b></div>
            <br />
            <div>Город: <b className='span'>{thisUser.info?.city}</b> </div>
         </div>
         {thisUser.friendship === 'Не друзья' && <button onClick={addFriendHandler} className="uk-button uk-button-default extra_style" >Добавить в друзья</button> }
        {thisUser.friendship === 'Подтвержден' && <button onClick={deleteFriendHandler} className="uk-button uk-button-default extra_style" >Удалить из друзей</button> }
        {thisUser.friendship === 'В обработке' && <button onClick={deleteFriendHandler} className="uk-button uk-button-default extra_style" >Отменить заявку</button> }
       </div>
    </div>

    <h3 className="uk-heading-line uk-text-center" onClick={calendarSwitch}>
        {calendarSwitcher ? <span className='first_span' uk-icon="chevron-down" >лента событий</span> : <span className='first_span' uk-icon="chevron-up" >лента событий</span>}
      </h3>

      {/* <div>
      <h3 className="uk-heading-line uk-text-center" >
        <span className='first_span' uk-icon="chevron-up" >лента событий
        </span> 
      </h3>
      </div> */}
    <div className="uk-card uk-card-default eventProfile_box">
        <div>
          {!calendarSwitcher && <>
            <div >
        {/* <h2>{thisUser?.info?.name}'s public events</h2> */}
        {thisUser?.info && thisUser?.events?.publicEvents?.length ? thisUser?.events?.publicEvents.map(el => 
        <ParticularUserPublicEvents key={el.id} event={el} />) : <div>у пользователя отсутствуют публичные события</div>}
      {/* <h2>{thisUser?.info?.name}'s events for friends</h2> */}
        {thisUser?.friendship === 'Подтвержден' && thisUser?.events?.forFriendsEvents?.length ? (thisUser.events.forFriendsEvents).map(el =>
        <ParticularUserEventsForFriends key={el.id} event={el} />) : <div></div>}
      </div> </>}
        </div>
      </div>

      
    </div>
  );
}

export default UserProfile;
