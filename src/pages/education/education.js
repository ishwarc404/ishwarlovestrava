import './education.css';
import React, {useState} from 'react';


import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';

import background from '../../assets/squiggly6_greeen.png';
import ssu from '../../assets/ssu.jpg';


var information= 'Graduated with GPA of 8.74/10';
var isInformationVisible = false;

function Education(props) {
  const [,setState] = useState();

  function changeInfo(data) {

    if(data === 'btech'){
      information = 'Graduated with GPA of 8.74/10, and worked on multiple genres of projects. During this time, I fell in love with the field of Cloud Computing and full stack product development.';
      isInformationVisible = true;
    }
    else if (data === 'ms'){
      information = 'Beginning my studies this Fall as a full-time student at Boulder. My goal is to specialise in the field of cloud computing and backend systems.';
      isInformationVisible = true;
    }
    else if (data === 'internship'){
      information = 'Worked as a Full Stack Developer, incorporating technologies such as Python, .NET, mySQL & VueJs. Developed and deployed two customer facing projects. The more successful of the two handles live traffic of more than 300 systems. ';
      isInformationVisible = true;
    }
    else if (data === 'fulltime'){
      information = 'Worked as a front end developer for more than a year with Angular micro-front end. Implemented customer facing features for their BloxOne DDI product, developed UI components, bug-fixing and also participated in UX designing.';
      isInformationVisible = true;
    }
    else {
      isInformationVisible = false;
    }

    setState({});
   }

  return (
    <div className="Education">
      <Header/>
      <div className='bodycontent' style={{ backgroundImage:`url(${background})`,
        backgroundRepeat: 'repeat',
        backgroundSize:'100vw'}}>     
      
      <div className='d-flex justify-content-start'>
        <div className='header_2_education'>
            <span onMouseOver={() => changeInfo('btech')} onMouseLeave={() => changeInfo('')} className='highlight_block_education'><b>Bachelor's in Computer Science</b>
            <br></br>
            <b>PES University, Bangalore ['21]</b></span>
            <br></br>
            <br></br>
            <span onMouseOver={() => changeInfo('ms')} onMouseLeave={() => changeInfo('')} className='highlight_block_education'><b>Master's of Computer Science</b>
            <br></br>
            <b>University of Colorado, Boulder  ['24]</b></span>
            <br></br>
            <br></br>
            <span onMouseOver={() => changeInfo('internship')}  onMouseLeave={() => changeInfo('')} className='highlight_block_education'><b>Bot Mantra, DeltaX</b>
            <br></br>
            <b>Software Developer Intern ['19-'21]</b></span>
            <br></br>
            <br></br>
            <span onMouseOver={() => changeInfo('fulltime')} onMouseLeave={() => changeInfo('')} className='highlight_block_education'><b>Infoblox Inc.</b>
            <br></br>
            <b>Software Developer ['21-'22]</b></span>
        </div>
        <div className={'information_box' + (isInformationVisible ? '' : ' information_box_invisible')}>
        <span className='highlight_block_information'>{information}</span>
            <br></br>
        </div>
      </div>


        </div> 

      {/* <img className="ssu" src={ssu} /> */}
      <Navbar/>
    </div>
  );
}

export default Education;
