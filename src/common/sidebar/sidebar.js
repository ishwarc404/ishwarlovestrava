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
    isInformationBoxVisible = false;
    setState({});
  }, [])

  return (
    <div className='sidebar-parent' onMouseOver={() => { isInformationBoxVisible = true; setState({}); }} onMouseLeave={() => { setTimeout(() => {
      isInformationBoxVisible = false; setState({}); 
    }, 5000); }}>
      <div className='side-bar'>
        <div id="home" className={'body_content_info'}>
          <div className='d-flex justify-content-around' >
            <div>
              <span className="material-symbols-outlined" >
                info
              </span>
            </div>
            <div className={' ' + (isInformationBoxVisible && pathValue == 1 ? 'information-box' : 'information-box-invisible')} >
              The background is a heatmap of all my activities in Bangalore.
              <div className='automatic_close_div'>This closes automatically.</div>
            </div>
            <div className={' ' + (isInformationBoxVisible && pathValue == 2 ? 'information-box' : 'information-box-invisible')}>
              <div>
                Image from my first ultra marathon, the
                <a href='https://www.strava.com/activities/6105334812' target='_blank'> Solang Sky Ultra.</a>
                <div className='automatic_close_div'>This closes automatically.</div>
              </div>
            </div>
            <div className={' ' + (isInformationBoxVisible && pathValue == 3 ? 'information-box' : 'information-box-invisible')}>
              Image from the hike to <a href='https://www.strava.com/activities/5870833129' target='_blank'>Gephan Lake, Himachal Pradesh.
              </a>
              <div className='automatic_close_div'>This closes automatically.</div>
            </div>
            <div className={' ' + (isInformationBoxVisible && pathValue == 6 ? 'information-box' : 'information-box-invisible')}>
              Live data using Strava's API v3
              <div className='automatic_close_div'>This closes automatically.</div>
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


