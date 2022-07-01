import './education.css';
import React, {useState} from 'react';


import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';

import background from '../../assets/squiggly5.png';

var information= 'Graduated with GPA of 8.74/10';

function Education(props) {
  const [,setState] = useState();

  function changeInfo(data) {
    if(data === 'btech'){
      information = 'Graduated with GPA of 8.74/10';
    }
    else if (data === 'ms'){
      information = 'Beginning my studies this Fall as a full-time student at Boulder';
    }
    else if (data === 'internship'){
      information = 'Worked as a full stack developer with technologies such as Python, .NET & VueJs';
    }
    else if (data === 'fulltime'){
      information = 'Working as a front end developer with Angular uFEs';
    }
    else information = 'Hover over the experience to view more information';

    setState({});
   }

  return (
    <div className="Education">
      <Header/>
      <div className='bodycontent' style={{ backgroundImage:`url(${background})`,
        backgroundRepeat: 'no-repeat',
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
        <div className='information_box'>
        <span className='highlight_block_information'>{information}</span>
            <br></br>
        </div>
      </div>


        </div> 

      <Navbar/>
    </div>
  );
}

export default Education;
