import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/appointment' element={<Appointment />}></Route>
        </Routes>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
