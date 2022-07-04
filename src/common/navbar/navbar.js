import './navbar.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

var pathValue = 1;

function Navbar() {
  const [, setState] = useState();
  let navigate = useNavigate();

  function clicked(path) {
    pathValue = path;
  }

  return (
    <div className='navigation-bar d-flex justify-content-center'>
      <div id="home" className={'body_content_1 body_content_all' + (pathValue === 1 ? ' orange' : ' ')}>
        <div onClick={() => { navigate('/home'); clicked(1) }}>Home</div>
      </div>

      <div id="education" className={'body_content_2 body_content_all' + (pathValue === 2 ? ' orange' : ' ')}>
        <div onClick={() => { navigate('/education'); clicked(2) }}>Education & Experience</div>
      </div>

      <div id="skills" className={'body_content_3 body_content_all' + (pathValue === 3 ? ' orange' : ' ')}>
        <div onClick={() => { navigate("/skills"); clicked(3) }}>Skills</div>
      </div>

      <div id="achievements" className={'body_content_4 body_content_all' + (pathValue === 4 ? ' orange' : ' ')}>
        <div onClick={() => { navigate("/achievements"); clicked(4) }}>Projects & Achievements</div>
      </div>

      <div id="whyme" className={'body_content_5 body_content_all' + (pathValue === 5 ? ' orange' : ' ')}>
        <div onClick={() => { navigate("/whyme"); clicked(5) }}>Why me?</div>
      </div>

      <div id="mystrava" className={'body_content_6 body_content_all' + (pathValue === 6 ? ' orange' : ' ')}>
        <div onClick={() => { navigate("/mystrava"); clicked(6) }}>my Strava</div>
      </div>
    </div>

  );
}

export default Navbar;
