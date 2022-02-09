import React from 'react';
import Calendar from 'react-calendar';

function CalendarComponent(props) {

  const eventHandle = (value) => {
    const date = value.toLocaleString('ru');

    console.log(date);
  }

  return (
    <main>
      <Calendar  onClickDay={eventHandle}/>
    </main>
  );
}

export default CalendarComponent;
