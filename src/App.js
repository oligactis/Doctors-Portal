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
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
     <Router>
     <AuthProvider>
        <Routes> 
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route exact path='/appointment' element={<PrivateRoute><Appointment></Appointment></PrivateRoute>}></Route>
          {/* <PrivateRoute exact path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute> */}
        </Routes>
     </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
