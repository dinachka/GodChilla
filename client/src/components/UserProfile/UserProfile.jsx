import React from 'react';
import { initAnotherUserFetchAC } from '../../redux/actionCreatorsAsync/userACAsync';
import { addFriendshipFetchAC, deleteFriendshipFetchAC } from '../../redux/actionCreatorsAsync/friendsACAsync';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ParticularUserPublicEvents from '../ParticularUserPublicEvents/ParticularUserPublicEvents';
import ParticularUserEventsForFriends from '../ParticularUserEventsForFriends/ParticularUserEventsForFriends';

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
  },[dispatch, id]);

  const addFriendHandler = () => {
    dispatch(addFriendshipFetchAC(idForFriends));
    dispatch(initAnotherUserFetchAC(id));
  }

  const deleteFriendHandler = () => {
    console.log(id)
    dispatch(deleteFriendshipFetchAC(id));
    dispatch(initAnotherUserFetchAC(id));
  }
  
  return (
    <>
      Имя: {thisUser.info?.name}
      <br />
      Фамилия: {thisUser.info?.lastName}
      <br />
      Город: {thisUser.info?.city}
      <br />
      {thisUser.friendship === 'Не друзья' && <button onClick={addFriendHandler}>Добавить в друзья</button> }
      {thisUser.friendship === 'Подтвержден' && <button onClick={deleteFriendHandler}>Удалить из друзей</button> }
      {thisUser.friendship === 'В обработке' && <button onClick={deleteFriendHandler}>Отменить заявку</button> }
      <div className='bottomLine'></div>
      <div >
        <div className='stateSwitcher'>
          <div className='display'>Лента</div>
        </div>
        {thisUser.info && <ParticularUserPublicEvents user={thisUser}/>}
        {thisUser.friendship === 'Подтвержден' && <ParticularUserEventsForFriends user={thisUser}/> }
      </div>
    </>
  );
}

export default UserProfile;
