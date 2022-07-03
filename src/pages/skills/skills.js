import './skills.css';

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';


import background from '../../assets/skills5.png';
import Discussion from '../../common/discussion/discussion';


function Skills() {
  return (
    <div>
      <div className="Home">
        <Header />
        <div className='bodycontent' style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100vw'
        }}>
          <div className='d-flex justify-content-end'>
            <div className='technical'>
              <span className='highlight_block_technical'>
                Technical
              </span>
              <br></br>
              <p className='highlight_block_technical_content'>
                <span className='highlight_block_technical_content_sub'>Professional knowledge</span>: Python, Angular, .NETCore, Typescript.
                <div className='breakdiv'></div>
                <span className='highlight_block_technical_content_sub'>Intermediate knowledge</span>: ReactJs, VueJs, Flask framework , AWS, C++, MongoDB, SQL & OpenCV.
                <div className='breakdiv'></div>
                <span className='highlight_block_technical_content_sub'>Basic knowledge</span>: Jenkins, ElectronJs, Selenium.
              </p>
              <br></br>
              <br></br>
              <span className='highlight_block_technical'>
                Non - technical
              </span>
              <br></br>
              <p className='highlight_block_technical_content'>
                Final Cut Pro X, Adobe Suite, Digital design, Sound design.
              </p>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
      <Discussion />
    </div>
  );
}

export default Skills;
