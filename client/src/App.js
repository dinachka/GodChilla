// import { Provider } from "react-redux";
// import { store } from "../../redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'

import Navigation from "./components/Navigation/Navigation";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
// import CurrentProfile from "./components/CurrentProfile/CurrentProfile";
import EventsList from "./components/EventsList/EventsList";
// import CurrentEvent from "./components/CurrentEvent/CurrentEvent";
// import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/profile/:id' element={<CurrentProfile />} /> */}
          <Route path='/events' element={<EventsList />} />
          {/* <Route path='/events/:id' element={<CurrentEvent />} /> */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
