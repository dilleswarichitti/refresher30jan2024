import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Events from './components/Events';
import Menu from './components/Menu';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import GetAccess from './components/GetAccess';
import Schedules from './components/Schedules';

function App() {

  return (
    <div>
     <BrowserRouter>
      <Menu/>
      <div className="main">
      <Routes>
          <Route path="/" element={<Register/>} /> 
          <Route path="login" element={<Login/>} /> 
          <Route path="events" element={<Events/>} />
          <Route path="profile" element={<UserProfile/>} />
          <Route path="Schedules" element={<Schedules/>} /> 
          <Route path="GetAccess" element={<GetAccess/>} /> 
        </Routes> 
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
