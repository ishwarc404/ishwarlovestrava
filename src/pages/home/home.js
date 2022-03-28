import './home.css';
import { useLinkClickHandler, useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  function clicked(id) {
    var element = document.getElementById(id);
    element.classList.toggle("transform-active");
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  return (
    <div className="Home">
      <div className='header_1'>
        <div className="d-flex justify-content-between">
          <div className="header_content_1">Ishwar x Strava</div>
          <div className="header_content_2">
            <a className="email_href" href=''>email</a>
          </div>
        </div>
      </div>

      <div className='header_2'>
        Hi there, I'm <span className='highlight_block'><b>ISHWAR</b></span>, and this is my résumé for the summer intern position
        at Strava.
        <br></br>
        I hope you give me a chance to show you why I would be a
        great fit as part of your <br></br><span className='highlight_block'><b>ENGINEERING TEAM & COMMUNITY.</b></span>
        <br></br>
        <br></br>
        Thanks :)
      </div>


      <div id="aboutme" className='body_content_1 body_content_all transform'>
        <div onClick={() => { clicked('aboutme') }}>about me</div>
      </div>

      <div id="education" className='body_content_2 body_content_all transform'>
        <div onClick={() => { clicked('education') }}>education & experience</div>
      </div>

      <div id="technicalprowess" className='body_content_3 body_content_all'>
        <div onClick={() => { clicked("technicalprowess") }}>technical "prowess"</div>
      </div>

      <div id="whyme" className='body_content_4 body_content_all'>
        <div onClick={() => { clicked("whyme") }}>why hire me? </div>
      </div>

      <div id="mystrava" className='body_content_5 body_content_all'>
        <div onClick={() => { clicked("mystrava") }}> my Strava story</div>
      </div>

    </div>
  );
}

export default Home;
