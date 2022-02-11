import React from 'react'
import { Link } from 'react-router-dom'
import './FriendCard.css'

function FriendCard({ friend }) {

  return (
    <Link to={`/profile/user/${friend.id}`} style={{ textDecoration: 'none' }}>
      <div className="uk-card uk-card-default uk-animation-slide-bottom friendsCard_box">
        <div className="uk-width-auto friendsCard_box__img">
          <img className="uk-border-circle" width="40" height="40" src={friend.photo} alt='friends ava' />
        </div>
        <div className=" friendsCard_box__friendsName">
          <h3 className="uk-card-title uk-margin-remove-bottom">{friend.name}</h3>
          <p className="uk-text-meta uk-margin-remove-top">{friend.lastName}</p>
        </div>
      </div>
    </Link>
  )
}

export default FriendCard
