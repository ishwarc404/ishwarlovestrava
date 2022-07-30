import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

var pathValue = 1;
var newPath = '';
var isInformationBoxVisible = false;
function Sidebar(props) {
  const [, setState] = useState();
  let navigate = useNavigate();

  pathValue = props.path;

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  document.onkeydown = checkKey;

  // onMouseLeave={() => { isInformationBoxVisible = false; setState({}); }}

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
      if (newPath > 5) {
        navigate('/mystrava');
        newPath = 5;
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
      if (newPath > 5) {
        newPath = 4
        navigate('/achievements');
      }
    }

  }

  return (
    <div className=''>
      <div className='side-bar'>
        <div id="home" className={'body_content_info'}>
          <div className='d-flex justify-content-around' >
            <div onMouseOver={() => { isInformationBoxVisible = true; setState({}); }} >
              <span class="material-symbols-outlined" >
                info
              </span>
            </div>
            <div className={' ' + (isInformationBoxVisible && pathValue==1 ? 'information-box' : 'information-box-invisible')}>
              The background is a heatmap of all my activities in Bangalore.
            </div>
            <div className={' ' + (isInformationBoxVisible && pathValue==2 ? 'information-box' : 'information-box-invisible')}>
              Image from the first ultra marathon, the 
              <a href='https://www.strava.com/activities/6105334812' target='_blank'>Solang Sky Ultra.</a>
            </div>
          </div>
        </div>

        {/* <div id="education" className={'body_content_2 body_content_all' + (pathValue === 2 ? ' orange' : ' ')}>
          <div onClick={() => { navigate('/education'); clicked(2) }}>E & Experience</div>
        </div> */}
      </div>
    </div>

  );
}

export default Sidebar;


