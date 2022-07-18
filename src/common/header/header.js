import './header.css';
import { useNavigate } from 'react-router-dom';
import React, { useState , useEffect} from 'react';


import ishwarname from '../../assets/ishwar.png';
import xletter from '../../assets/x.png';
import strava from '../../assets/b&w.png';

var menuIsOpen = false;

function Header() {
  const [, setState] = useState();
  let navigate = useNavigate();

  return (
    <div className='header_1'>
      <div className="d-flex justify-content-between">
        <div className="header_content_1" onClick={()=>{navigate('/home');}}>
          <img className="ishwar_image" src={ishwarname} />
          <img className="x_image" src={xletter} />
          <img className="strava_image" src={strava} />
        </div>
        <div>
        <div className="header_content_2">
          <a className="email_href" href='' target='_blank'>email</a>
          <span> | </span>
          <a className="email_href" href='' target='_blank'>resume</a>
          <span> | </span>
          <a className="email_href" href='' target='_blank'>more</a>
        </div>
        <div className="header_content_3">
        {/* <button> */}
        <img onClick={()=>{menuIsOpen = true; setState({});}} className={"hamburger" + (menuIsOpen ? ' hidden' :'')} src="https://img.icons8.com/ios/50/000000/menu--v4.png"/>
        <img onClick={()=>{menuIsOpen = false; setState({});}} className={"hamburger_close" + (menuIsOpen ? '' :' hidden')} src="https://img.icons8.com/ios/100/000000/multiply.png"/>
        {/* </button> */}
        </div>
        </div>
       
      </div>
      <div className={"header_content_4 expandable_menu" + (menuIsOpen ? '' :'_hidden')}>
          <div className=' d-flex justify-content-center'>
          <a className="email_href" href='https://www.google.com' target='_blank'>email</a>
          </div>
          <div className=' d-flex justify-content-center'>
          <a className="email_href" href='' target='_blank'>resume</a>
          </div>
          <div className=' d-flex justify-content-center'>
          <a className="email_href" href='' target='_blank'>linkedIn</a>
          </div>
          <div className=' d-flex justify-content-center'>
          <a className="email_href" href='' target='_blank'>github</a>
          </div>
          <div className=' d-flex justify-content-center'>
          <a className="email_href" href='' target='_blank'>instagram</a>
          </div>
          <div className=' d-flex justify-content-center'>
          <a className="email_href" href='' target='_blank'>Strava</a>
          </div>
        </div>
    </div>

  );
}

export default Header;
