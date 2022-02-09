import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'
import { useDispatch, useSelector } from 'react-redux';
import { logoutFetchAC } from '../../redux/actionCreatorsAsync/userACAsync';
import { useNavigate } from 'react-router-dom';
import NotificationModal from '../NotificationModal/NotificationModal';

function Navigation() {

  const session = useSelector(state => state.userReducer)
  const dispath = useDispatch();
  const navigate = useNavigate();
  // Состояние для открытия/закрытия моадльного окна уведомлений
  const [isModal, setIsModal] = useState(false);
  
  const leaveSession = () => {
    dispath(logoutFetchAC())
    navigate('/')  
  };

  return (
    <>
      {session.user.isUser ? 
      < >
        <div className='uk-animation-slide-top'>
        <div className='upper'></div>
        <div className='logo_form'><Link to="/"><div className='godchilla'>GODCHILLA</div></Link></div>
          <nav className='uk-navbar' >
            <div className="uk-navbar-left" >
              <ul className="uk-navbar-nav uk-animation-slide-top" >
              <li onClick={()=>setIsModal(!isModal)} ><Link to="/#" className="uk-active bell"  ><div className='my' uk-icon="icon: bell; ratio: 1.2"></div></Link></li> 
                <li><Link to="/profile" className="uk-active profile"><div className='my'>Профиль</div></Link></li>
              </ul>
            </div>
            <div className="uk-navbar-right" >
              <ul className="uk-navbar-nav uk-animation-slide-top" >
                <li><Link to="/events" className="uk-active event" ><div className='my'>События</div></Link></li> 
                <li onClick={leaveSession} ><Link to="/#" className="uk-active logout" ><div className='my' uk-icon="icon:sign-out; ratio: 1.2"></div></Link></li>
              </ul>
            </div>
          </nav>
        </div>
    </>
      : 
      < >
        <div className='uk-animation-slide-top'>
          <div className='upper'></div>
          <div className='logo_form'><Link to="/"><div className='godchilla'>GODCHILLA</div></Link></div>
        </div>
      </>
      }
      {isModal && <NotificationModal />}    
    </>
  )
}

export default Navigation
