import React from 'react';

function ParticularUserPublicEvents({ user }) {

  const name = user.info.name

  return (
    <div>
      <h2>{name}'s public events</h2>
    </div>
  );
}

export default ParticularUserPublicEvents;
