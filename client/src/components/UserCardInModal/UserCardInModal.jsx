import React from 'react'

function UserCardInModal({ user }) {
  return (
    <div>
      <div>{ user.name }</div>
      <div>{ user.lastName }</div>
      <br />
    </div>
  )
}

export default UserCardInModal
