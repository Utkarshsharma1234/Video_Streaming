import { useContext } from "react";
import "./app.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import {AuthContext} from "../src/context/authContext/AuthContext"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const {user} = useContext(AuthContext);
  return <Router>

        <ToastContainer/>
        <Routes>
          
          <Route path="/" element={user ? <Home/>: <Navigate to={"/login"}/>}/>
          <Route path="/register" element={!user ? <Register/> : <Navigate to={"/"}/>}/>
          <Route path="/login" element={!user ? <Login/> : <Navigate to={"/"}/>}/>
          <Route path="/movies" element={user ? <Home type="movie"/> : <Navigate to={"/login"}/>}/>
          <Route path="/series" element={user ? <Home type="series"/>  : <Navigate to={"/login"}/>}/>
          <Route path="/watch" element={user ? <Watch/>  : <Navigate to={"/login"}/>}/>
        </Routes>

    </Router>
};

export default App;