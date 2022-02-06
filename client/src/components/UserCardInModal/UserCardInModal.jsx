import React from 'react'
import './userCardInModal.css'
import { useDispatch, useSelector } from 'react-redux';
import { addFriendshipFetchAC } from '../../redux/actionCreatorsAsync/friendsACAsync';

function UserCardInModal({ user }) {

  const mainUser = useSelector(state => state.userReducer)
  const dispatch = useDispatch();

  const getFriendship = (event) => {
    const idForFriends = {
      reqUserId: mainUser.id,
      resUserId: user.id
    }
    event.preventDefault();
    dispatch(addFriendshipFetchAC(idForFriends))
  }
  console.log(mainUser.user.id);

  return (
    <div className='userCardInModal' >
      <div>{ user.name }</div>
      <div>{ user.lastName }</div>
      <button onClick={getFriendship} >Добавить в друзья!</button>
      <br />
    </div>
  )
}

export default UserCardInModal
