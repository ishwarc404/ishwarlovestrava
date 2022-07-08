import './navbar.css';
import { useNavigate } from 'react-router-dom';
import React, { useState , useEffect} from 'react';

var pathValue = 1;
var newPath = '';
function Navbar(props) {
  const [, setState] = useState();
  let navigate = useNavigate();

  // useEffect(() => {
    pathValue = props.path;
  // })

  function clicked(path) {
    // pathValue = path;
  }
  document.onkeydown = checkKey;

  function checkKey(e) {
      e = e || window.event;
      //right
    if (e.keyCode == '39') {
        newPath = pathValue+1;
        pathValue = newPath;
        if(newPath==2){
          navigate('/education');
        }
        if(newPath==3){
          navigate('/skills');
        }
        if(newPath==4){
          navigate('/achievements');
        }
        // if(newPath==5){
        //   navigate('/whyme');
        // }
        if(newPath==5){
          navigate('/mystrava');
        }
        if(newPath>5){
          navigate('/mystrava');
          newPath = 5;
        }
      }
      //left
      else if (e.keyCode == '37') {
        newPath = pathValue-1;
        pathValue = newPath;
        if(newPath==1){
          navigate('/home');
        }
        if(newPath==2){
          navigate('/education');
        }
        if(newPath==3){
          navigate('/skills');
        }
        if(newPath==4){
          navigate('/achievements');
        }
        // if(newPath==5){
        //   navigate('/whyme');
        // }
        if(newPath==5){
          navigate('/achievements');
        }
        if(newPath>5){
          newPath = 4 
          navigate('/achievements');
        }
      }

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

      {/* <div id="whyme" className={'body_content_5 body_content_all' + (pathValue === 5 ? ' orange' : ' ')}>
        <div onClick={() => { navigate("/whyme"); clicked(5) }}>Why me?</div>
      </div> */}

      <div id="mystrava" className={'body_content_6 body_content_all' + (pathValue === 6 ? ' orange' : ' ')}>
        <div onClick={() => { navigate("/mystrava"); clicked(5) }}>my Strava</div>
      </div>
    </div>

  );
}

export default Navbar;
