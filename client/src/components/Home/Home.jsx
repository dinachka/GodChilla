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
      <CaruselMain /> :
       <div className='homePageContainer uk-animation-slide-bottom'>
       <div className='log-reg_Container' >
         <div className='regBlock' >
           <Link to="/registration">
             <div>
               <h4>Регистрация</h4>
             </div>
           </Link>
         </div>
         <div className='loginBlock'>
           <Link to="/login">
             <div className='logLink'>
               <h4 className='logLink' >Авторизация</h4>
             </div>
           </Link>
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
