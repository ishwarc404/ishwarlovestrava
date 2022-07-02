import './header.css';

import ishwarname from '../../assets/ishwar.png';
import xletter from '../../assets/x.png';
import strava from '../../assets/b&w.png';



function Header() {


  return (
    <div className='header_1'>
      <div className="d-flex justify-content-between">
        <div className="header_content_1">
          <img className="ishwar_image"src={ishwarname} />
          <img className="x_image" src={xletter} />
          <img className="strava_image" src={strava} />
        </div>
        <div className="header_content_2">
          <a className="email_href" href=''>email</a>
          <span> | </span>
          <a className="email_href" href=''>resume</a>
          <span> | </span>
          <a className="email_href" href=''>more</a>
        </div>
      </div>
    </div>

  );
}

export default Header;
