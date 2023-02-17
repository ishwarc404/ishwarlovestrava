import './summitCount.css';

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Sidebar from '../../common/sidebar/sidebar';
import Signal from '../../common/signal/signal';
import axios from "axios";
import background from '../../assets/ghepan2.png';
import Discussion from '../../common/discussion/discussion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';

var isOAuthDone = false
var greenMtSegments = ["30545810", "30546062", "30546055", "7492562"]
var greenMtCount = 0

function SummitCount() {

  const [, setState] = useState();
  const location = useLocation();
  var userAuthToken = ""


  function getRefreshTokenandAccessToken(authToken) {
    URL = `https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&code=${authToken}&grant_type=authorization_code`
    axios.post(URL, {
    }).then((response) => {
      var clientRefreshToken = response.data['refresh_token'];
      var clientAccessToken = response.data['access_token'];
      console.log(clientRefreshToken)
      console.log(clientAccessToken)
      //GETTING ATHLETE PROFILE DATA
      for (var i = 0; i < greenMtSegments.length; i++) {
        segmentCount(clientAccessToken, greenMtSegments[i])
      }
      setState({});
    });
  }


  function segmentCount(clientAccessToken,segmentID) {
    var segmentURL = `https://www.strava.com/api/v3/segment_efforts?segment_id=${segmentID}`
    axios.get(segmentURL, {
      headers: {
        'Authorization': `Bearer ${clientAccessToken}`,
      }
    }).then((response) => {
      console.log(response)
      greenMtCount += response.length
      setState({});
    });
  }

  function cleanUpAuthToken(str) {
    return str.split("&")[1].slice(5);
  };

  function handleLogin() {
    const redirectUrl = "http://localhost:3000/stravalogin";
    const scope = "read,activity:read_all"
    window.location = `http://www.strava.com/oauth/authorize?client_id=89361&response_type=code&redirect_uri=${redirectUrl}/exchange_token&scope=${scope}`
  }

  function clicked(val) {

  }
  useEffect(() => {
    let oauthurl = ""
    if (location.state) {
      if (location.state.href) {
        oauthurl = location.state.href
        const stravaAuthToken = cleanUpAuthToken(oauthurl);
        userAuthToken = stravaAuthToken;
        getRefreshTokenandAccessToken(userAuthToken)
        isOAuthDone = true;
      }
    }
  }, [])

  return (
    <div>
      <div className="SummitCount">
        <Header />
        <div className=' summitbanner d-flex justify-content-center'>
          <div>
            <p>SUMMITS</p>
          </div>
        </div>
        <div>
          <div className='info-display'>
            <button className={'' + (isOAuthDone ? 'loginwithStrava-invisible' : 'loginwithStrava')} onClick={handleLogin}>Login with Strava</button></div>
          <div className='d-flex justify-content-center'>
            <div className={'d-flex justify-content-center' + (isOAuthDone ? 'peaks' : 'peaks-invisible')}>
              <div className='peak_container_outer'>
                <div className={'d-flex justify-content-start peak_container'}
                  onClick={() => { clicked(1) }}>
                  <span className='peak_name'>Green Mountain</span>
                </div>
                <div className={'d-flex justify-content-start peak_container'}
                  onClick={() => { clicked(2) }}>
                  <span className='peak_name'>South Boulder Peak</span>
                </div>
              </div>
              <div className='peakinfo'>
                INFO {greenMtCount}
              </div>
            </div>
          </div>
          <Signal path={7} />
          <Sidebar path={7} />
          <Navbar path={7} />
        </div>
      </div>
    </div>
  );
}

export default SummitCount;
