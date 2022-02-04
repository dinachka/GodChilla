import React from 'react'

function FriendCard({friend}) {
  return (
    <div>
      {friend.name}
      <br />
      {friend.lastName}
      <br />
      <img src={friend.photo} alt="" />
    </div>
  )
}

export default FriendCard
