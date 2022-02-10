import React from 'react';

function PastEvent({ event }) {
  return (
    <div>
      <div>
        {event.photo ? (
          <img
            src="https://pbs.twimg.com/profile_images/445338647261229056/Gf5tt71x_400x400.jpeg"
            alt="not found"
          ></img>
        ) : (
          <img src={`/pictures/${event.categoryID}.jpg`} alt="not found"></img>
        )}
        <div> Название встречи: {event.title} </div>
        <div> Описание: {event.description} </div>
        <div> Место: {event.location} </div>
        <div> Дата: {event.dateTime} </div>
      </div>
    </div>
  );
}

export default PastEvent;
