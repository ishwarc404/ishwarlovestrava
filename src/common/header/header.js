import './header.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


import ishwarname from '../../assets/ishwar.png';
import xletter from '../../assets/x.png';
import strava from '../../assets/b&w.png';
import uparrow from '../../assets/up_arrow.png';
import mediumlogo from '../../assets/1200px-Medium_logo_Wordmark_Black.png'
import stravalogo from '../../assets/1280px-Strava_Logo.svg.png'
import githublogo from '../../assets/GitHub-Logo.png'
import linkedinlogo from '../../assets/LinkedIn_Logo.svg.png'
import instagramlogo from '../../assets/Instagram_logo.svg.png'

var menuIsOpen = false;
var moreIsOpen = false;

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
            <a className="email_href" href="mailto:ishwarc404@gmail.com?subject=Hi Ishwar!" target='_blank'>email</a>
            <span className='seperator_line'> | </span>
            <a className="email_href" href='https://drive.google.com/file/d/1-zUxpJ4-k8ZJpPXoaKaQdTnvXLMX5PZo/view?usp=sharing' target='_blank'>resume</a>
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
        <div className='d-flex justify-content-center flex-div-more-parent'>
          <img onClick={() => { moreIsOpen = false; setState({}); }} className="up_arrow_image" src={uparrow} />
        </div>
        <div className='d-flex justify-content-center flex-div-more'>
          <div className="more_content"><a href='https://www.linkedin.com/in/ishwarchoudhary/' target='_blank'><span className="more_content_name_linkedIn">
            <img className="medium_image" src={linkedinlogo} />
          </span></a></div>
          <div className="more_content"><a href='https://github.com/ishwarc404?tab=repositories' target='_blank'><span className="more_content_name">
            <img className="github_image" src={githublogo} />
          </span></a></div>
          <div className="more_content"><a href='https://www.strava.com/athletes/43290018' target='_blank'><span className="more_content_name_strava">
            <img className="medium_image" src={stravalogo} />
          </span></a></div>
          <div className="more_content"><a href='https://medium.com/@ishwarc404' target='_blank'><span className="more_content_name">
            <img className="medium_image" src={mediumlogo} />
          </span></a></div>
          <div className="more_content"><a href='https://instagram.com/ishwartakespictures' target='_blank'><span className="more_content_name_instagram">
            <img className="medium_image" src={instagramlogo} />
          </span></a></div>

        </div>
        <div>
          <div className=' d-flex justify-content-center flex-div-more-small'>
            <div className="more_content_bug"><a href='https://docs.google.com/document/d/197UcH4W1h5uKv51FwpsT7BJKtzRQUuYddL2VpjaKw5U/edit?usp=sharing' target='_blank'><span className="">Credits</span></a></div>
            <div className="more_content_bug">
              <a href="mailto:ishwarc404@gmail.com?subject=Ishwar x Strava: Bug Report" target='_blank'>Report a bug!</a></div>
            <div className="more_content_bug">
              <a href="https://forms.gle/RB2CDD2vwFDaDvfv9" target='_blank'>Get access to the webpage code.</a></div>
          </div>


        </div>
      </div>
      <div className={"header_content_4 expandable_menu" + (menuIsOpen ? '' : '_hidden')}>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href="mailto:ishwarc404@gmail.com?subject=Hi Ishwar!" target='_blank'>Email</a>
        </div>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='https://drive.google.com/file/d/1-zUxpJ4-k8ZJpPXoaKaQdTnvXLMX5PZo/view?usp=sharing' target='_blank'>Resume</a>
        </div>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='https://www.linkedin.com/in/ishwarchoudhary/' target='_blank'>LinkedIn</a>
        </div>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='https://github.com/ishwarc404?tab=repositories' target='_blank'>Github</a>
        </div>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='https://www.strava.com/athletes/43290018' target='_blank'>Strava</a>
        </div>
        <div className=' d-flex justify-content-center'>
          <a className="email_href" href='https://docs.google.com/document/d/197UcH4W1h5uKv51FwpsT7BJKtzRQUuYddL2VpjaKw5U/edit?usp=sharing' target='_blank'>Credits</a>
        </div>
      </div>
    </div>

  );
}

export default Header;
