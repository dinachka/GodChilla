import React from 'react';
import CurrentEvent from '../Event/Event';

function EventsList(props) {
  const events = [{photo: 1, category: 'nature', description: 'отдыхаем на природе', title: 'пикник', location: 'Сертолово', dateTime: '11-12-13', userID: 1, id: 1}, {photo: 0, category: 'nature', description: 'отдыхаем на природе', title: 'пикник', location: 'Сертолово', dateTime: '11-12-13', userID: 1, id: 2}, {photo: 0, category: 'nature', description: 'отдыхаем на природе', title: 'пикник', location: 'Сертолово', dateTime: '11-12-13', userID: 1, id: 3}, {photo: 1, category: 'nature', description: 'отдыхаем на природе', title: 'пикник', location: 'Сертолово', dateTime: '11-12-13', userID: 1, id: 4}, {photo: 0, category: 'nature', description: 'отдыхаем на природе', title: 'пикник', location: 'Сертолово', dateTime: '11-12-13', userID: 1, id: 5}, {photo: 0, category: 'nature', description: 'отдыхаем на природе', title: 'пикник', location: 'Сертолово', dateTime: '11-12-13', userID: 1, id: 6}]
  return (
    <>
      { events.length && events.map( el => <CurrentEvent key={el.id} event={el}/>)}
    </>
  );
}

export default EventsList;
