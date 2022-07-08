import './mystrava.css';


import React, {useState, useEffect} from 'react';

// import heatmap from '../../assets/heatmaporiginal.png';

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Discussion from '../../common/discussion/discussion';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Mystrava() {

  // useEffect(() => {
    
  // })

  return (
    <div>
      <div className="Mystrava">

        <Header />

        <div className='bodycontent' style={{
          backgroundImage: `url()`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100vw'
        }}>

            <ResponsiveMasonry
                columnsCountBreakPoints={{100: 1, 750: 2, 900: 3,400:4}}
            >
                <Masonry>
                   <div className='grid-item grid-item-1'>
                    500
                   </div>
                   <div className='grid-item grid-item-2'>
                    20
                   </div>
                   <div className='grid-item grid-item-3'>
                    Run
                   </div>
                   <div className='grid-item grid-item-4'>
                    78 kudos
                   </div>
                   <div className='grid-item grid-item-5'>
                    Ishwar
                   </div>
                   <div className='grid-item grid-item-6'>
                    21.3
                   </div>
                   <div className='grid-item grid-item-7'>
                    Run 1
                   </div>
                   <div className='grid-item grid-item-8'>
                    Run 2
                   </div>
                   <div className='grid-item grid-item-9'>
                    Run 3
                   </div>

                </Masonry>
            </ResponsiveMasonry>

  
          <Navbar path={6}/>
        </div>
      </div>
      <Discussion />
    </div>

  );
}

export default Mystrava;
