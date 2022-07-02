import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/home/home';
import Education from './pages/education/education';
import Skills from './pages/skills/skills';

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/whyme" element={<Home/>}/>
            <Route path="/mystrava" element={<Home/>}/>
        </Routes>
      </Router>
  );
}

export default App;
