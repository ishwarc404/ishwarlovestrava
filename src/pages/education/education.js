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
            <span onMouseOver={() => changeInfo('btech')} className='highlight_block'><b>Bachelor's in Computer Science</b></span>
            <br></br>
            <span onMouseOver={() => changeInfo('btech')} className='highlight_block'><b>PES University, Bangalore ['17-'21]</b></span>
            <br></br>
            <br></br>
            <span onMouseOver={() => changeInfo('ms')} className='highlight_block'><b>Master's of Computer Science</b></span>
            <br></br>
            <span onMouseOver={() => changeInfo('ms')} className='highlight_block'><b>University of Colorado, Boulder ['22-'24]</b></span>
            <br></br>
            <br></br>
            <span onMouseOver={() => changeInfo('internship')} className='highlight_block'><b>Bot Mantra, DeltaX</b></span>
            <br></br>
            <span onMouseOver={() => changeInfo('internship')} className='highlight_block'><b>Software Developer Intern ['19-'21]</b></span>
            <br></br>
            <br></br>
            <span onMouseOver={() => changeInfo('fulltime')} className='highlight_block'><b>Infoblox Inc.</b></span>
            <br></br>
            <span onMouseOver={() => changeInfo('fulltime')} className='highlight_block'><b>Software Developer ['21-'22]</b></span>
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
