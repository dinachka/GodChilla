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

  // const getFriendship = (event) => {
  //   const idForFriends = {
  //     reqUserID: mainUser.user.id,
  //     resUserID: user.id
  //   }
  //   event.preventDefault();
  //   dispatch(addFriendshipFetchAC(idForFriends))
  //   navigate('/profile');
  // }

  return (
    <Link to={`/profile/user/${user.id}`} style={{ textDecoration: 'none' }} >
      <div className='uk-card uk-card-default uk-animation-slide-bottom friendsCard_box' >
        <div className="uk-width-auto friendsCard_box__img">
            <img className="uk-border-circle" width="40" height="40" src={user.photo} alt='friends ava' />
          </div>
        <div className="friendsCard_box__friendsName">
            <h3 className="uk-card-title uk-margin-remove-bottom">{ user.name }</h3>
            <p className="uk-text-meta uk-margin-remove-top">{ user.lastName }</p>
        </div>
        {user.photo ? <img src={user.photo} alt='none'></img> : <img src={user.photo} alt='none'></img>}
        {/* <button onClick={getFriendship} >Добавить в друзья!</button> */}
        <br />
      </div>
    </Link>
  )
}

export default UserCardInModal
