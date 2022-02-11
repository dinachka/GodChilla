import React from 'react'
import CaruselMain from '../CaruselMain/CaruselMain.jsx';
import './home.css'
import { Link, } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {

  const session = useSelector(state => state.userReducer)
  return (
    <>
      {session.user.isUser ? 
      <div  className='uk-animation-slide-bottom'>
        <CaruselMain />
      </div> :
       <div className='homePageContainer uk-animation-slide-bottom'>
       <div className='log-reg_Container' >
          <div className='loginBlock'>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <div className='logLink'>
                <h4 className='buttons' >Авторизация</h4>
              </div>
            </Link>
          </div>
          <div className='regBlock ' >
            <Link to="/registration" style={{ textDecoration: 'none' }}>
              <div>
                <h4 className='buttons'>Регистрация</h4>
              </div>
            </Link>
          </div>
          <div className='infoBlock'>
            <h4 className='button_info'>Информация</h4>
          </div>

        </div>
       <div className='carusel'>
         <CaruselMain />
       </div>     
     </div> }
    </>
  )
}

export default Home
