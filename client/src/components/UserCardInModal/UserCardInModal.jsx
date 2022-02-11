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
      <div className=' uk-animation-slide-bottom friendsCard_box' >
        <div className="friendsCard_box__img">
          {user.photo ?
            <img className="friendsCard_box__img__size" src={user.photo} alt='friends ava' ></img>
            :
            <img src={user.photo} alt='none'></img>}
        </div>
        <div className="friendsCard_box__friendsName">
          <h3 className="uk-card-title uk-margin-remove-bottom">{user.name}</h3>
          <p className="uk-text-meta uk-margin-remove-top">{user.lastName}</p>
        </div>
        {/* <button onClick={getFriendship} >Добавить в друзья!</button> */}
      </div>
    </Link>
  )
}

export default UserCardInModal
