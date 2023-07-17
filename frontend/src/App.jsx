import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Chat from "./pages/Chat/Chat.jsx";
// import Footer from "./components/Footer.jsx";

const App = () => {
  return (
   <div>
    <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    
   </div>
  );
}

export default App;
