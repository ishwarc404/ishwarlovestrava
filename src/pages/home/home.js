import './home.css';


import React, { useState, useEffect } from 'react';

import loadingGif from '../../assets/12fps.gif';
import signal from '../../assets/right_down_signal.png';

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Discussion from '../../common/discussion/discussion';
import Sidebar from '../../common/sidebar/sidebar';
import Signal from '../../common/signal/signal';

var bottomSignalColor = 'rgb(52, 227, 43)';
function Home(props) {
  const [, setState] = useState();

  function handleScroll(e){
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { 
        bottomSignalColor = 'rgb(255, 6, 36)'; //red
        setState({});
     }
     else{
      bottomSignalColor = 'rgb(52, 227, 43)' //green
      setState({});
     }
  }


  if (!props.loading) {
    return (
      <div>
        <div className="Home" onScroll={handleScroll}>

          <Header />

          <div className='bodycontent'>

            <div className='header_2'>
              <span className='header_content_all'> Hi there! I'm Ishwar, and this is my application for the 2023 <span className='highlight_block'><b>SUMMER INTERN</b></span> position
                at Strava.</span>
              <br></br>
              <span className='header_content_all'>
              I’d love to show you why I’d be a great fit at STRAVA and as part of your <span className='highlight_block'><b>ENGINEERING TEAM.</b></span>
              </span>
              <br></br>
              <br></br>
              Thanks!
            </div>

            <Signal path={1} bottomSignalColor={bottomSignalColor} />
            <Sidebar path={1} />
            <Navbar path={1} />
          </div>

          <Discussion />

        </div>
      </div>

    );
  }
  else {
    return (
      <div className='HomeLoader'>
      <div className='d-flex justifty-content-center loadingGifDiv'>
        <img src={loadingGif} className="loadingGif"></img>
      </div>
      
      </div>
    );
  }
}

export default Home;
