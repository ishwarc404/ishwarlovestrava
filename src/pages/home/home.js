import './home.css';
import { useLinkClickHandler, useNavigate } from 'react-router-dom';

import heatmap from '../../assets/heatmaporiginal.png';
import ishwarname from '../../assets/ishwar.png';
import xletter from '../../assets/x.png';
import strava from '../../assets/b&w.png';

function Home() {
  let navigate = useNavigate();

  return (
    <div className="Home">
      <div className='header_1'>
        <div className="d-flex justify-content-between">
          <div className="header_content_1">
            <img className="ishwar_image"src={ishwarname} />
            <img className="x_image" src={xletter} />
            <img className="strava_image" src={strava} />
          </div>
          <div className="header_content_2">
            <a className="email_href" href=''>email</a>
          </div>
        </div>
      </div>

      <div className='bodycontent' style={{ backgroundImage:`url(${heatmap})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'100vw'}}>

        <div className='header_2'>
          Hi there, I'm <span className='highlight_block'><b>ISHWAR</b></span>, and this is my résumé for the summer intern position
          at Strava.
          <br></br>
          I hope you give me a chance to show you why I would be a
          great fit as part of your <br></br><span className='highlight_block'><b>ENGINEERING TEAM & COMMUNITY.</b></span>
          <br></br>
          <br></br>
          Thanks!
        </div>

        <div className='navigation-bar d-flex justify-content-center'>
          <div id="aboutme" className='body_content_1 body_content_all'>
            <div onClick={() => { navigate('/aboutme') }}>Home</div>
          </div>

          <div id="education" className='body_content_2 body_content_all'>
            <div onClick={() => {  navigate('/education') }}>Education</div>
          </div>

          <div id="technicalprowess" className='body_content_3 body_content_all'>
            <div onClick={() => {  navigate("/experience") }}>Experience</div>
          </div>

          <div id="technicalprowess" className='body_content_3 body_content_all'>
            <div onClick={() => {  navigate("/technicalprowess") }}>Technical "prowess"</div>
          </div>

          <div id="technicalprowess" className='body_content_3 body_content_all'>
            <div onClick={() => {  navigate("/achievements") }}>Achievements</div>
          </div>

          <div id="whyme" className='body_content_4 body_content_all'>
            <div onClick={() => {  navigate("/whyme") }}>Why me?</div>
          </div>

          <div id="mystrava" className='body_content_5 body_content_strava'>
            <div onClick={() => {  navigate("/mystrava") }}> my Strava</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
