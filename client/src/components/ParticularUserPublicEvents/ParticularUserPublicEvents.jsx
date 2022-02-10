import React from 'react';

function ParticularUserPublicEvents({ user }) {
  
  return (
    <div>
      <p>Название встречи: {user.title}</p>
      <p>Описание: {user.description}</p>
      <p>Место: {user.location}</p>
      <br />
    </div>
  );
}

export default ParticularUserPublicEvents;
