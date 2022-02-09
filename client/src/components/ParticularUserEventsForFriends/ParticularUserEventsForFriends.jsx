import React from 'react';

function ParticularUserEventsForFriends({ user }) {

  const name = user.info.name

  return (
    <div>
      <h2>{name}'s events for friends</h2>
    </div>
  );
}

export default ParticularUserEventsForFriends;
