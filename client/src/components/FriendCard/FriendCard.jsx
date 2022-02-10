import React from 'react'
import { Link } from 'react-router-dom'

function FriendCard({ friend }) {

  return (
    <Link to={`/profile/user/${friend.id}`} >
      <div className="uk-card uk-card-default uk-animation-slide-bottom" style={{ display: 'flex', maxHeight: '100px' }}>
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" style={{ display: 'flex' }}>
            <div className="uk-width-auto">
              <img className="uk-border-circle" width="30" height="30" src={friend.photo} alt='friends ava' />
            </div>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">{friend.name}</h3>
              <p className="uk-text-meta uk-margin-remove-top">{friend.lastName}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FriendCard
