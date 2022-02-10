import React from 'react'
import { Link } from 'react-router-dom'

function FriendCard({friend}) {
  
  return (
    <Link to={`/profile/user/${friend.id}`} >
      <div >
        {friend.name}
        <br />
        {friend.lastName}
        <br />
        <img src={friend.photo} alt="" />
      </div>
      </Link>
  )
}

export default FriendCard
