import './header.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


import ishwarname from '../../assets/ishwar.png';
import xletter from '../../assets/x.png';
import strava from '../../assets/b&w.png';

var menuIsOpen = false;
var moreIsOpen = true;

function Header() {
  const [, setState] = useState();
  let navigate = useNavigate();

  document.onkeydown = checkKey;

  function checkKey(e) {
      e = e || window.event;
      //right
    if (e.keyCode == '27') {
      moreIsOpen = false;
      setState({});
    }
  }

  return (
    <div className={'header_1' + (moreIsOpen ? ' expand_full_screen' : '')}>
      <div className="d-flex justify-content-between">
        <div className="header_content_1" onClick={() => { navigate('/home'); }}>
          <img className="ishwar_image" src={ishwarname} />
          <img className="x_image" src={xletter} />
          <img className="strava_image" src={strava} />
        </div>
        <div>
          <div className="header_content_2">
            <a className="email_href" href='' target='_blank'>email</a>
            <span className='seperator_line'> | </span>
            <a className="email_href" href='' target='_blank'>resume</a>
            <span className='seperator_line'> | </span>
            <a onClick={() => { moreIsOpen = !moreIsOpen; setState({}); }}>
              <span className='more_div' >more</span>

            </a>
          </div>
          <div className="header_content_3">
            {/* <button> */}
            <img onClick={() => { moreIsOpen = false; menuIsOpen = true; setState({}); }} className={"hamburger" + (menuIsOpen ? ' hidden' : '')} src="https://img.icons8.com/ios/50/000000/menu--v4.png" />
            <img onClick={() => { moreIsOpen = false; menuIsOpen = false; setState({}); }} className={"hamburger_close" + (menuIsOpen ? '' : ' hidden')} src="https://img.icons8.com/ios/100/000000/multiply.png" />
            {/* </button> */}
          </div>
        </div>

      </div>
      <div className={'header_content_more' + (moreIsOpen ? ' more_data_visible' : '')}>
        <div className=' d-flex justify-content-center flex-div-more'>
          <div  className="more_content"><a  href='' target='_blank'><span className="more_content_name_linkedIn">LinkedIn</span></a></div>
          <div  className="more_content"><a  href='' target='_blank'><span className="more_content_name">Github</span></a></div>
          <div  className="more_content"><a  href='' target='_blank'><span className="more_content_name_strava">Strava</span></a></div>
          <div  className="more_content"><a  href='' target='_blank'><span className="more_content_name">Medium</span></a></div>
          <div  className="more_content"><a  href='' target='_blank'><span className="more_content_name_instagram">Instagram</span></a></div>
          <div  className="more_content"><a  href='' target='_blank'><span className="more_content_name">Credits</span></a></div>
        </div>
        <div>
        <div className=' d-flex justify-content-center flex-div-more'>
        <div className="more_content_bug"> 
        <a href="mailto:ishwarc404@gmail.com?subject=Ishwar x Strava: Bug Report" target='_blank'>Report a bug!</a></div>
        </div>
        </div>
      </div>
      <div className={"header_content_4 expandable_menu" + (menuIsOpen ? '' : '_hidden')}>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='https://www.google.com' target='_blank'>Email</a>
        </div>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='' target='_blank'>Resume</a>
        </div>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='' target='_blank'>LinkedIn</a>
        </div>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='' target='_blank'>Github</a>
        </div>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='' target='_blank'>Strava</a>
        </div>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='' target='_blank'>Credits</a>
        </div>
      </div>
    </div>

  );
}

export default Header;
