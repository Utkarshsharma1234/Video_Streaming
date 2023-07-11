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

const App = () => {
  const user = true;
  return <Router>

        <Routes>
          
          <Route path="/" element={user ? <Home/>: <Navigate to={"/login"}/>}/>
          <Route path="/register" element={!user ? <Register/> : <Navigate to={"/"}/>}/>
          <Route path="/login" element={!user ? <Login/> : <Navigate to={"/"}/>}/>
          <Route path="/movies" element={user ? <Home type="movies"/> : <Navigate to={"/login"}/>}/>
          <Route path="/series" element={user ? <Home type="series"/>  : <Navigate to={"/login"}/>}/>
          <Route path="/watch" element={user ? <Watch/>  : <Navigate to={"/login"}/>}/>
        </Routes>

    </Router>
};

export default App;