import React from 'react'
import { Link } from 'react-router-dom'
import './FriendCard.css'

function FriendCard({ friend }) {

  return (
    <Link to={`/profile/user/${friend.id}`} style={{ textDecoration: 'none' }}>
      <div className=' uk-animation-slide-bottom friendsCard_box' >
        <div className="friendsCard_box__img">
          {friend.photo ?
            <img className="friendsCard_box__img__size" src={friend.photo} alt='friends ava' ></img>
            :
            <img src={friend.photo} alt='none'></img>}
        </div>
        <div className="friendsCard_box__friendsName">
          <h3 className="uk-card-title uk-margin-remove-bottom">{friend.name}</h3>
          <p className="uk-text-meta uk-margin-remove-top">{friend.lastName}</p>
        </div>
        {/* <button onClick={getFriendship} >Добавить в друзья!</button> */}
      </div>
    </Link>
  )
}

export default FriendCard
