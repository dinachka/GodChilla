import React from 'react';

function PastEvent({ event }) {
  return (
    <div>
      <div>
        {event.photo ? (
          <img
            src={event.photo}
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
