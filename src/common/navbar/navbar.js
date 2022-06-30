import './navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  let navigate = useNavigate();

  return (
    <div className='navigation-bar d-flex justify-content-center'>
    <div id="aboutme" className='body_content_1 body_content_all'>
      <div onClick={() => { navigate('/aboutme') }}><b>Home</b></div>
    </div>

    <div id="education" className='body_content_2 body_content_all'>
      <div onClick={() => {  navigate('/education') }}><b>Education & Experience</b></div>
    </div>

    <div id="technicalprowess" className='body_content_3 body_content_all'>
      <div onClick={() => {  navigate("/technicalprowess") }}><b>Technical "prowess"</b></div>
    </div>

    <div id="technicalprowess" className='body_content_3 body_content_all'>
      <div onClick={() => {  navigate("/achievements") }}><b>Achievements</b></div>
    </div>

    <div id="whyme" className='body_content_4 body_content_all'>
      <div onClick={() => {  navigate("/whyme") }}><b>Why me?</b></div>
    </div>

    <div id="mystrava" className='body_content_5 body_content_all'>
      <div onClick={() => {  navigate("/mystrava") }}><b>my Strava</b></div>
    </div>
  </div>

  );
}

export default Navbar;
