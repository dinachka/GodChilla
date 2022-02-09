import React from 'react'
import CaruselMain from '../CaruselMain/CaruselMain.jsx';
import './home.css'
import { Link, } from 'react-router-dom';

function Home() {
  return (
    <div className='homePageContainer uk-animation-slide-bottom'>
      <div className='log-reg_Container' >
        <div className='loginBlock'>
          <Link to="/login" >
            <div>
              <h4>Авторизация</h4>
            </div>
          </Link>
        </div>
        <div className='regBlock' >
          <Link to="/registration">
            <div>
              <h4>Регистрация</h4>
            </div>
          </Link>
        </div>
      </div>

      <div className='carusel'>
        <CaruselMain />
      </div>     
    </div>
  )
}

export default Home
