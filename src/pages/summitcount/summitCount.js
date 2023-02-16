import './summitCount.css';

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Sidebar from '../../common/sidebar/sidebar';
import Signal from '../../common/signal/signal';

import background from '../../assets/ghepan2.png';
import Discussion from '../../common/discussion/discussion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'


function SummitCount(props) {

  const location = useLocation();
  var userAuthToken = ""


  function cleanUpAuthToken(str) {
    return str.split("&")[1].slice(5);
  };

  function handleLogin() {
    const redirectUrl = "http://localhost:3000/stravalogin";
    const scope = "read"
    window.location = `http://www.strava.com/oauth/authorize?client_id=89361&response_type=code&redirect_uri=${redirectUrl}/exchange_token&scope=${scope}`
    // popup.closed
    // if (popup) {
    //   popup.onClose = function () { console.log(popup.opener.location) }
    // }
    // // console.log(popup.location)
    // window.location = `http://www.strava.com/oauth/authorize?client_id=89361&response_type=code&redirect_uri=${redirectUrl}/exchange_token&scope=${scope}`;
    // const stravaAuthToken = cleanUpAuthToken(location.search);
    // alert(stravaAuthToken);
  }

  useEffect(() => {
    let oauthurl = ""
    if (location.state) {
      if (location.state.href) {
        oauthurl = location.state.href
        const stravaAuthToken = cleanUpAuthToken(oauthurl);
        userAuthToken = stravaAuthToken;
      }
    }
  }, [])

  return (
    <div>
      <div className="SummitCount">
        <Header />
        <div className=''>
          <div className='summitbanner d-flex justify-content-center'>
            <p>SUMMITS</p>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='peaks'>
              Green Mountain
            </div>
            <div className='info-display'><button onClick={handleLogin}>Connect with Strava</button></div>
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
