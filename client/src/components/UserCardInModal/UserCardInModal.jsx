import React from 'react'
import './userCardInModal.css'
import { useDispatch, useSelector } from 'react-redux';
import { addFriendshipFetchAC } from '../../redux/actionCreatorsAsync/friendsACAsync';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UserCardInModal({ user }) {

  const mainUser = useSelector(state => state.userReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const getFriendship = (event) => {
    const idForFriends = {
      reqUserID: mainUser.user.id,
      resUserID: user.id
    }
    event.preventDefault();
    dispatch(addFriendshipFetchAC(idForFriends))
    navigate('/profile');
  }

  return (
    <Link to={`/profile/user/${user.id}`} >
      <div className='userCardInModal' >
        <div>{ user.name }</div>
        <div>{ user.lastName }</div>
        <button onClick={getFriendship} >Добавить в друзья!</button>
        <br />
      </div>
    </Link>
  )
}

export default UserCardInModal
