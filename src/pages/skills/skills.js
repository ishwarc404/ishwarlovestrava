import './skills.css';

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Sidebar from '../../common/sidebar/sidebar';

import background from '../../assets/ghepan2.png';
import Discussion from '../../common/discussion/discussion';


function Skills() {
  return (
    <div>
      <div className="Skills">
        <Header />
        <div className='bodycontent_skills '>
          <div className='d-flex justify-content-end nonresponsive-div'>
            <div className='technical'>
              <span className='highlight_block_technical'>
                Technical
              </span>
              <br></br>
              <p className='highlight_block_technical_content'>
                <span className='highlight_block_technical_content_sub'>Professional</span>: Python, Angular, .NETCore, Typescript.
                <div className='breakdiv'></div>
                <span className='highlight_block_technical_content_sub'>Intermediate</span>: ReactJs, VueJs, Flask framework, AWS, C++, MongoDB, & OpenCV.
                <div className='breakdiv'></div>
                <span className='highlight_block_technical_content_sub'>Basic</span>: Jenkins, ElectronJs, Web automation with Selenium.
              </p>
              <br></br>
              <br></br>
              <span className='highlight_block_technical'>
                Non - technical
              </span>
              <br></br>
              <p className='highlight_block_technical_content'>
                Final Cut Pro X, Adobe Suite - Photoshop, Illustrator, & XD.
              </p>
            </div>
          </div>
          <Sidebar path={3}/>
          <Navbar path={3}/>
        </div>
      </div>
      {/* <Discussion /> */}
    </div>
  );
}

export default Skills;
