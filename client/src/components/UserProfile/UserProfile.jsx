import React from 'react';
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
  
  return (
    <div className='user_profile_main_box'>

    <div className='profile_info_container'>

       <div className='user_info_container' >
         <div className='user_info'>
           <div>ИМЯ: {thisUser.info?.name}</div>
           <br />
           <div>ФАМИЛИЯ: {thisUser.info?.lastName}</div>
           <br />
           <div>ГОРОД: {thisUser.info?.city}</div>
         </div>
       </div>

    </div>
      



      
      {thisUser.friendship === 'Не друзья' && <button onClick={addFriendHandler}>Добавить в друзья</button> }
      {thisUser.friendship === 'Подтвержден' && <button onClick={deleteFriendHandler}>Удалить из друзей</button> }
      {thisUser.friendship === 'В обработке' && <button onClick={deleteFriendHandler}>Отменить заявку</button> }

      <div>
      <h3 className="uk-heading-line uk-text-center" >
        <span className='first_span' uk-icon="chevron-up" >лента событий
        </span> 
      </h3>
      </div>
   
      <div >
        <div className='stateSwitcher'>
          <div className='display'>Лента</div>
        </div>
        <h2>{thisUser?.info?.name}'s public events</h2>
        {thisUser?.info && thisUser?.events?.publicEvents?.length ? thisUser?.events?.publicEvents.map(el => 
        <ParticularUserPublicEvents key={el.id} user={el} />) : <div>None!</div>}
      <h2>{thisUser?.info?.name}'s events for friends</h2>
        {thisUser?.friendship === 'Подтвержден' && thisUser?.events?.forFriendsEvents?.length ? (thisUser.events.forFriendsEvents).map(el =>
        <ParticularUserEventsForFriends key={el.id} user={el} />) : <div>None!</div>}
      </div>
    </div>
  );
}

export default UserProfile;
