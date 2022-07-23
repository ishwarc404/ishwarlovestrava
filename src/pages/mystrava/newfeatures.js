import './newfeatures.css';
import React, { useState, useEffect } from 'react';

function NewFeatures() {
  const [, setState] = useState();


  return (
    <div className='NewFeatures'>
        <div className='d-flex justfity-content-center'>
            <div className='title-new-features'>Features I would <span className='love-span'>love</span> to use on Strava</div>
            <div className='divider-div'></div>
            <div className='title-new-features-feat'><ol><li>Group Rides</li><li>Translate</li></ol></div>
        </div>
    </div>

  );
}

export default NewFeatures;
