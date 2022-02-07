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
import './CaruselMain.module.css'
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
  console.log(events);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        wrapperTag='ul'
        spaceBetween={50}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        speed={1000}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        style={{ height: '200px', padding: '40px' }}
      >
        {events.length && events.map(event =>

          <SwiperSlide style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8quM5ex_WfSkUizmCjCSCPBwOQCseCatiQ&usqp=CAU)', backgroundSize: 'cover', borderRadius: '20px' }} key={event.id} >
            <div style={{ paddingLeft: '30px' }}>
              <h2>{event.title} {event.id} </h2>
              <p>{event.dateTime} </p>
              <p> {event.location} </p>
            </div>
          </SwiperSlide>
        )}

      </Swiper>
    </>
  );
}

export default CaruselMain;
