import './navbar.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

var pathValue = 1;
var newPath = '';
function Navbar(props) {
  const [, setState] = useState();
  let navigate = useNavigate();

  pathValue = props.path;

  useEffect(() => {
    // window.scrollTo(0, 0);
  })

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;
    //right
    if (e.keyCode == '39') {
      newPath = pathValue + 1;
      pathValue = newPath;
      if (newPath == 2) {
        navigate('/education');
      }
      if (newPath == 3) {
        navigate('/skills');
      }
      if (newPath == 4) {
        navigate('/achievements');
      }
      // if(newPath==5){
      //   navigate('/whyme');
      // }
      if (newPath == 5) {
        navigate('/mystrava');
      }
      if (newPath > 6) {
        navigate('/summitCount');
        newPath = 7;
      }
    }
    //left
    else if (e.keyCode == '37') {
      newPath = pathValue - 1;
      pathValue = newPath;
      if (newPath == 1) {
        navigate('/home');
      }
      if (newPath == 2) {
        navigate('/education');
      }
      if (newPath == 3) {
        navigate('/skills');
      }
      if (newPath == 4) {
        navigate('/achievements');
      }
      // if(newPath==5){
      //   navigate('/whyme');
      // }
      if (newPath == 5) {
        navigate('/achievements');
      }
      if (newPath == 6) {
        newPath = 6
        navigate('/mystrava');
      }
    }

  }

  return (
    <div className=''>
      <div className='navigation-bar d-flex justify-content-center'>
        <div id="home" className={'body_content_1 body_content_all' + (pathValue === 1 ? ' orange' : ' ')}>
          <div onClick={() => { navigate('/home'); }}>Home</div>
        </div>

        <div id="education" className={'body_content_2 body_content_all' + (pathValue === 2 ? ' orange' : ' ')}>
          <div onClick={() => { navigate('/education'); }}>Education & Experience</div>
        </div>

        <div id="skills" className={'body_content_3 body_content_all' + (pathValue === 3 ? ' orange' : ' ')}>
          <div onClick={() => { navigate("/skills"); }}>Skills</div>
        </div>

        <div id="achievements" className={'body_content_4 body_content_all' + (pathValue === 4 ? ' orange' : ' ')}>
          <div onClick={() => { navigate("/achievements"); }}>Projects & Achievements</div>
        </div>

        {/* <div id="whyme" className={'body_content_5 body_content_all' + (pathValue === 5 ? ' orange' : ' ')}>
        <div onClick={() => { navigate("/whyme"); }}>Why me?</div>
      </div> */}

        <div id="mystrava" className={'body_content_6 body_content_all' + (pathValue === 6 ? ' orange' : ' ')}>
          <div onClick={() => { navigate("/mystrava"); }}>My Strava</div>
        </div>

        <div id="summitCount" className={'body_content_7 body_content_all' + (pathValue === 7 ? ' orange' : ' ')}>
          <div onClick={() => { navigate("/summitCount"); }}>Summits</div>
        </div>

      </div>
      <div className='navigation-bar-2 d-flex justify-content-around'>
        <div id="home" className={'body_content_1_responsive body_content_all' + (pathValue === 1 ? ' orange' : ' ')}>
          <div className='home_icon_parent' onClick={() => { navigate('/home'); }}>
            <svg className="acheivements_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 00 50 50 "><path d="M 24.960938 2.1015625 A 1.0001 1.0001 0 0 0 24.386719 2.3105469 L 1.3867188 20.210938 A 1.0001 1.0001 0 1 0 2.6132812 21.789062 L 4 20.708984 L 4 48 A 1.0001 1.0001 0 0 0 5 49 L 18.832031 49 A 1.0001 1.0001 0 0 0 19.158203 49 L 30.832031 49 A 1.0001 1.0001 0 0 0 31.158203 49 L 45 49 A 1.0001 1.0001 0 0 0 46 48 L 46 20.708984 L 47.386719 21.789062 A 1.0001 1.0001 0 1 0 48.613281 20.210938 L 25.613281 2.3105469 A 1.0001 1.0001 0 0 0 24.960938 2.1015625 z M 25 4.3671875 L 44 19.154297 L 44 47 L 32 47 L 32 29 A 1.0001 1.0001 0 0 0 31 28 L 19 28 A 1.0001 1.0001 0 0 0 18 29 L 18 47 L 6 47 L 6 19.154297 L 25 4.3671875 z M 20 30 L 30 30 L 30 47 L 20 47 L 20 30 z"></path></svg>
            <br></br>
            <span className='home_icon_title'>Home</span>
          </div>
        </div>

        <div id="education" className={'body_content_2_responsive body_content_all' + (pathValue === 2 ? ' orange' : ' ')}>
          <div className='edu_icon_parent' onClick={() => { navigate('/education'); }}>
            <span className="material-symbols-outlined test-material-icon">
              school
            </span>
            <br></br>
            <span className='edu_icon_title'>Education</span>
          </div>
        </div>

        <div id="skills" className={'body_content_3_responsive body_content_all' + (pathValue === 3 ? ' orange' : ' ')}>
          <div className='skills_icon_parent' onClick={() => { navigate("/skills"); }}>
            <span className="material-symbols-outlined skills-icon test-material-icon">
              code
            </span>            <br></br>
            <span className='skills_icon_title'>Skills</span>
          </div>
        </div>

        <div id="achievements" className={'body_content_4_responsive body_content_all' + (pathValue === 4 ? ' orange' : ' ')}>
          <div className='acheivements_icon_parent' onClick={() => { navigate("/achievements"); }}>
            <svg className="acheivements_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.57 4.57 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.31-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77v-7.5h2.64v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29zm-5.42 20.04h-4.5L12 21.12zm4.09-11.19a3.156 3.156 0 01-1.4 2.41l-3.22 1.84c-.76.43-1.36.75-1.64.88a15.37 15.37 0 01-1.78-.88l-3.23-1.84a3.186 3.186 0 01-1.4-2.41V3.55a.1.1 0 00.05-.04h-.05V1.67h12.66V7.6h.01z" fill=""></path></svg>
            <br></br>
            <span className='acheivements_icon_title'>Achievements</span>
          </div>
        </div>

        {/* <div id="whyme" className={'body_content_5_responsive body_content_all' + (pathValue === 5 ? ' orange' : ' ')}>
        <div onClick={() => { navigate("/whyme"); }}>Why me?</div>
      </div> */}

        <div id="mystrava" className={'body_content_6_responsive body_content_all' + (pathValue === 6 ? ' orange' : ' ')}>
          <div className='mystrava_icon_parent' onClick={() => { navigate("/mystrava"); }}>
            <img className="mystrava_icon"  width="18" src="https://img.icons8.com/windows/64/000000/strava.png" />
            <br></br>
            <span className='mystrava_icon_title'>Me</span>
          </div>
        </div>

       
      </div>
    </div>

  );
}

export default Navbar;
