import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import LoginWraper from "./components/LoginWrapper/LoginWrapper";

import Navigation from "./components/Navigation/Navigation";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import EventsList from "./components/EventsList/EventsList";
import UserProfile from "./components/UserProfile/UserProfile";
import { Dialogs } from "./components/Dialogs/Dialogs";
// import CurrentEvent from "./components/CurrentEvent/CurrentEvent";
// import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Provider store={store}>
      <LoginWraper>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/user/:id' element={<UserProfile />} />
            <Route path='/events' element={<EventsList />} />
            <Route path='/dialogs' element={<Dialogs />} />
            {/* <Route path='/events/:id' element={<CurrentEvent />} /> */}
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </LoginWraper>
    </Provider>
  );
}

export default App;
