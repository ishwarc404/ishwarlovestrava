import './App.css';

import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Home from './pages/home/home';
import Education from './pages/education/education';
import Skills from './pages/skills/skills';
import Achievements from './pages/achievements/achievements';
import MyStrava from './pages/mystrava/mystrava';


var firstLoadUp = true;

function App() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r,3200));
      setLoading((loading) => { loading = false; });
      firstLoadUp = false;
    };
    loadData();
  }, []);



  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home loading={loading}/>}/>
            <Route path="/*" element={<Home loading={loading}/>}/>
            <Route path="/home" element={<Home loading={loading}/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/achievements" element={<Achievements/>}/>
            <Route path="/mystrava" element={<MyStrava/>}/>
            <Route path="/*" element={<Home loading={loading}/>}/>
            <Route element={<Home loading={loading}/>} />
        </Routes>
      </Router>
  );
}

export default App;
