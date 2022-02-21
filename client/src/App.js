import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ChatWrapper from './components/ChatWrapper/ChatWrapper';
import { Dialogs } from './components/Dialogs/Dialogs';
import EventsList from './components/EventsList/EventsList';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import LoginWraper from './components/LoginWrapper/LoginWrapper';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Registration from './components/Registration/Registration';
import UserProfile from './components/UserProfile/UserProfile';
import { store } from './redux/store';

// import CurrentEvent from "./components/CurrentEvent/CurrentEvent";
// import NotFound from "./components/NotFound/NotFound";

function App() {

  return (
    <Provider store={store}>
      <LoginWraper>
        {/* <ChatWrapper> */}
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/user/:id" element={<UserProfile />} />
              <Route path="/events" element={<EventsList />} />
              <Route path="/dialogs" element={<Dialogs />} />
              {/* <Route path='/events/:id' element={<CurrentEvent />} /> */}
              {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
          </BrowserRouter>
        {/* </ChatWrapper> */}
      </LoginWraper>
    </Provider>
  );
}

export default App;
