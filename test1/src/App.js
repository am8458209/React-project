import logo from './logo.svg';
import lmg from './scott-webb-yekGLpc3vro-unsplash.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Nav.css'
import HomePage from './Home';
import Na from './Nav';
import A from './A';
import Log from './Log';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
<>




      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<A />} />
        <Route path="/LOG" element={<Log />} />
      </Routes>
    
{/* <A/> */}
{/* <Log/> */}



</>

  );
}

export default App;
