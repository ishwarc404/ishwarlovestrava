import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/home/home';
import AboutMe from './pages/aboutme/aboutme';
import Education from './pages/education/education';


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<Home/>}/>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/technicalprowess" element={<AboutMe/>}/>
            <Route path="/whyme" element={<AboutMe/>}/>
            <Route path="/mystrava" element={<AboutMe/>}/>
        </Routes>
      </Router>
  );
}

export default App;
