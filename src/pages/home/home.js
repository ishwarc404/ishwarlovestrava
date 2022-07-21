import './home.css';


import React, { useState, useEffect } from 'react';

import loadingGif from '../../assets/12fps.gif';

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Discussion from '../../common/discussion/discussion';

function Home(props) {

  if (!props.loading) {
    return (
      <div>
        <div className="Home">

          <Header />

          <div className='bodycontent'>

            <div className='header_2'>
              <span className='header_content_all'> Hi there! I'm ISHWAR, and this is my application for the 2023 <span className='highlight_block'><b>SUMMER</b></span> INTERN position
                at Strava.</span>
              <br></br>
              <span className='header_content_all'>
              I hope you give me a chance to showcase why I would be a great fit as part of Strava’s
              <br></br><span className='highlight_block'><b>ENGINEERING TEAM.</b></span>
              </span>
              <br></br>
              <br></br>
              Thanks!
            </div>

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
