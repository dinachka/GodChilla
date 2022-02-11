import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { INIT_CLOSEST_EVENTS_FETCH } from '../../redux/actionTypes/eventAT'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './caruselMain.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
SwiperCore.use([Autoplay]);

function CaruselMain(props) {
  // const state = useSelector(state => state.studentsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: INIT_CLOSEST_EVENTS_FETCH })
  }, [dispatch])

  const { closesEvents: events } = useSelector(state => state.eventReducer)
  const session = useSelector(state => state.userReducer)

  return (
    <>
      {session.user.isUser ? 
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // wrapperTag='ul'
      // spaceBetween={10}
      slidesPerView={1}
      navigation
      // navigation={{
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      speed={2000}
      pagination={{ clickable: true }}
      className='swiper_style_no_session'
    >
      {events.length && events.map(event =>
        <SwiperSlide  className='swiper_style_no_session' style={{ backgroundImage: `url(${event.photo})` }} key={event.id} >
          <div className='down_flag_no_session'>
          <h4>Цель: {event.title} </h4>
            <span>Дата: {event.dateTime} </span>
            <br />
            <span>Место: {event.location} </span>
          </div>
        </SwiperSlide>
      )}
    </Swiper> 
      : 
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // wrapperTag='ul'
        // spaceBetween={10}
        slidesPerView={1}
        navigation
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        speed={2000}
        pagination={{ clickable: true }}
        className='swiper_style'
      >
        {events.length && events.map(event =>
          <SwiperSlide  className='swiper_style' style={{ backgroundImage: `url(${event.photo})` }} key={event.id} >
            <div className='down_flag'>
            <h4>Цель: {event.title} </h4>
              <span style={{color: 'white'}} >Дата: {event.dateTime} </span>
              <br />
              <span className='span_carusel' >Место: {event.location} </span>
            </div>
          </SwiperSlide>
        )}
      </Swiper> }
    </>
  )
}

export default CaruselMain;
