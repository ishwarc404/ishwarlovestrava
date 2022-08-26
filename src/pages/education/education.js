import './education.css';
import React, { useState } from 'react';


import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Sidebar from '../../common/sidebar/sidebar';
import background from '../../assets/squiggly6_green3.png';
import Discussion from '../../common/discussion/discussion';
import Signal from '../../common/signal/signal';



var information = 'Beginning my studies this Fall as a full-time student at Boulder. Taking up Algorithms and Data Mining in my first semester. Concurrently working as a bike mechanic at the university bike station and also as a video editor. ';

var isInformationVisible = true;
var pathValue = 2;

function Education(props) {
  const [, setState] = useState();

  function changeInfo(data) {

    if (data === 'btech') {
      information = 'Graduated with GPA of 8.74/10, and worked on multiple genres of projects. During this time, I fell in love with the field of Cloud Computing and full stack product development.';
      isInformationVisible = true;
      pathValue = 1;
    }
    else if (data === 'ms') {
      information = 'Beginning my studies this Fall as a full-time student at Boulder. Taking up Algorithms and Data Mining in my first semester. Concurrently working as a bike mechanic at the university bike station and also as a video editor. ';
      isInformationVisible = true;
      pathValue = 2;
    }
    else if (data === 'internship') {
      information = 'Worked as a Full Stack Developer, where I developed and deployed two customer facing projects. One of which, is an a activity monitoring software for call-centres and handles live traffic from more than 300 systems.';
      isInformationVisible = true;
      pathValue = 3;
    }
    else if (data === 'internship2') {
      information = 'Worked as a Full Stack Developer. Developed an advertisement mock-up tool for internal use. Used technologies like .NET Core, mySQL & VueJs.';
      isInformationVisible = true;
      pathValue = 4;
    }
    else if (data === 'fulltime') {
      information = 'Worked as a front end developer for more than a year with Angular micro-front end. Implemented customer facing features for their BloxOne DDI product, developed UI components, bug-fixing and also participated in UX designing.';
      isInformationVisible = true;
      pathValue = 5;
    }
    // else {
    //   isInformationVisible = false;
    // }

    setState({});
  }

  return (
    <div>
      <div className="Education">
        <Header />
        <div className='bodycontent_education' style={{
        }}>

          <div className='d-flex justify-content-center education_div_main'>
            <div className='header_2_education'>
              <span onMouseOver={() => changeInfo('ms')} className={'highlight_block_education' + (pathValue === 2 ? ' educationhighlight_container_2' : '')}>
                Master's in Computer Science
                <br></br>
                University of Colorado, Boulder, 2024</span>
              <br></br>
              <br></br>
              <span onMouseOver={() => changeInfo('btech')} className={'highlight_block_education' + (pathValue === 1 ? ' educationhighlight_container_1' : '')}>Bachelor's in Computer Science
                <br></br>
                PES University, Bangalore, 2021</span>
              <br></br>
              <br></br>
              <span onMouseOver={() => changeInfo('fulltime')} className={'highlight_block_education' + (pathValue === 5 ? ' educationhighlight_container_5' : '')}>Infoblox Inc.
                <br></br>
                Software Developer, '21-'22</span>
              <br></br>
              <br></br>
              <span onMouseOver={() => changeInfo('internship2')} className={'highlight_block_education' + (pathValue === 4 ? ' educationhighlight_container_4' : '')}>DeltaX
                <br></br>
                Software Developer Intern, 2020</span>
              <br></br>
              <br></br>
              <span onMouseOver={() => changeInfo('internship')} className={'highlight_block_education' + (pathValue === 3 ? ' educationhighlight_container_3' : '')}>Bot Mantra
                <br></br>
                Software Developer Intern, '19-'20</span>

            </div>
            <div className={'information_box' + (isInformationVisible ? '' : ' information_box_invisible')}>
              <span className='highlight_block_information'>{information}</span>
              <br></br>
            </div>
          </div>
          <div className='d-flex justify-content-center'>

            <div className={'information_box_mobile' + (isInformationVisible ? '' : ' information_box_invisible_mobile')}>
              <span className='highlight_block_information_mobile'>{information}</span>
              <br></br>
            </div>

          </div>
        </div>
        <Signal path={2} />
        <Sidebar path={2} />
        <Navbar path={2} />
      </div>
      {/* <Discussion /> */}
    </div>
  );
}

export default Education;
