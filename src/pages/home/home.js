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
              <span className='header_content_all'> Hi there! I'm <span className='highlight_block'><b>ISHWAR</b></span>, and this is my résumé for the summer intern position
                at Strava.</span>
              <br></br>
              <span className='header_content_all'>
                I hope you give me a chance to show you why I would be a
                great fit as part of your <br></br><span className='highlight_block'><b>ENGINEERING TEAM.</b></span>
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
