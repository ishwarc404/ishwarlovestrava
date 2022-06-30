import './education.css';

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';

import background from '../../assets/squiggly5.png';

import RotationBox from "react-3d-rotation-box";


function Education() {

  return (
    <div className="Education">
      <Header/>
      <div className='bodycontent' style={{ backgroundImage:`url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'100vw'}}>     
      
      <div className='header_2_education'>
          <span className='highlight_block_education'><b>Bachelor's in Computer Science, 2021</b></span>
          <br></br>
          <span className='highlight_block_education'><b>PES University, Bangalore, India</b></span>
          <br></br>
          <br></br>
          <br></br>
          <span className='highlight_block_education'><b>Master's of Computer Science, 2024</b></span>
          <br></br>
          <span className='highlight_block_education'><b>University of Colorado, Boulder</b></span>
          <br></br>

          <RotationBox>
              
          </RotationBox>


        </div>

        </div> 

      <Navbar/>
    </div>
  );
}

export default Education;
