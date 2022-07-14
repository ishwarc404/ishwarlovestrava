import './education.css';
import React, { useState } from 'react';


import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';

import background from '../../assets/squiggly6_greeen.png';
import Discussion from '../../common/discussion/discussion';



var information = 'Graduated with GPA of 8.74/10, and worked on multiple genres of projects. During this time, I fell in love with the field of Cloud Computing and full stack product development.';

var isInformationVisible = true;
var pathValue  = 1;

function Education(props) {
  const [, setState] = useState();

  function changeInfo(data) {

    if (data === 'btech') {
      information = 'Graduated with GPA of 8.74/10, and worked on multiple genres of projects. During this time, I fell in love with the field of Cloud Computing and full stack product development.';
      isInformationVisible = true;
      pathValue  = 1;
    }
    else if (data === 'ms') {
      information = 'Beginning my studies this Fall as a full-time student at Boulder. My goal is to specialise in the field of cloud computing and backend systems.';
      isInformationVisible = true;
      pathValue  = 2;
    }
    else if (data === 'internship') {
      information = 'Worked as a Full Stack Developer, incorporating technologies such as Python, .NET, mySQL & VueJs. Developed and deployed two customer facing projects. The more successful of the two handles live traffic of more than 300 systems. ';
      isInformationVisible = true;
      pathValue  = 3;
    }
    else if (data === 'internship2') {
      information = 'Worked as a Full Stack Developer, incorporating technologies such as Python, .NET, mySQL & VueJs. Developed and deployed two customer facing projects. The more successful of the two handles live traffic of more than 300 systems. ';
      isInformationVisible = true;
      pathValue  = 4;
    }
    else if (data === 'fulltime') {
      information = 'Worked as a front end developer for more than a year with Angular micro-front end. Implemented customer facing features for their BloxOne DDI product, developed UI components, bug-fixing and also participated in UX designing.';
      isInformationVisible = true;
      pathValue  = 5;
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
        <div className='bodycontent' style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100vw'
        }}>

          <div className='d-flex justify-content-start education_div_main'>
            <div className='header_2_education'>
            <span onMouseOver={() => changeInfo('ms')}  className={'highlight_block_education'+ (pathValue === 2 ? ' educationhighlight_container_2' : '')}>Master's in Computer Science
                <br></br>
                University of Colorado, Boulder, 2024</span>
              <br></br>
              <br></br>
              <span onMouseOver={() => changeInfo('btech')} className={'highlight_block_education' + (pathValue === 1 ? ' educationhighlight_container_1' : '')}>Bachelor's in Computer Science
                <br></br>
                PES University, Bangalore, 2021</span>
              <br></br>
              <br></br>
              <span onMouseOver={() => changeInfo('fulltime')}  className={'highlight_block_education'+ (pathValue === 5 ? ' educationhighlight_container_5' : '')}>Infoblox Inc.
                <br></br>
                Software Developer, '21-'22</span>
              <br></br>
              <br></br>
              <span onMouseOver={() => changeInfo('internship2')}  className={'highlight_block_education'+ (pathValue === 4 ? ' educationhighlight_container_4' : '')}>DeltaX
                <br></br>
                Software Developer Intern, 2020</span>
              <br></br>
              <br></br>
              <span onMouseOver={() => changeInfo('internship')}  className={'highlight_block_education'+ (pathValue === 3 ? ' educationhighlight_container_3' : '')}>Bot Mantra
                <br></br>
                Software Developer Intern, '19-'20</span>

            </div>
            <div className={'information_box' + (isInformationVisible ? '' : ' information_box_invisible')}>
              <span className='highlight_block_information'>{information}</span>
              <br></br>
            </div>
          </div>
        </div>
        <Navbar path={2}/>
      </div>
      <Discussion />
    </div>
  );
}

export default Education;
