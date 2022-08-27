import './newfeatures.css';
import React, { useState, useEffect } from 'react';
import iphone from '../../assets/iphone.png';
import translate1 from '../../assets/translate1.jpg';
import translate2 from '../../assets/translate2.png';
import arrow_left from '../../assets/arrow_left.png';
import kilianjgroupride from '../../assets/kilianjgroupride.png';

var translate1Flag = true;

function NewFeatures() {
  const [, setState] = useState();

  useEffect(()=>{
    // if(translate1Flag){}
  })

  return (
    <div className='NewFeatures'>
      <div className='d-flex justfity-content-center'>
        <div className='title-new-features'>Features I would <span className='love-span'>love</span> to see on Strava</div>
        <div className='divider-div'></div>
        <div className='d-flex feature-1'>
          {/* <div className='prototypes-title'>Translate</div> */}
          <div className='prototypes'>
            <img className='iphone-1-prototype' src={iphone} width="300"></img>
            <img className={'iphone-1-image-original' + (translate1Flag ? '' : ' invisible')} src={translate1}></img>
            <img className={'iphone-1-image-translate' + (translate1Flag ? ' invisible' : '')} src={translate2}></img>
            <button onClick={()=>{translate1Flag = false; setState({});}} className={'iphone-1-image-translate-button' + (translate1Flag ? '' : ' invisible')}>Translate</button>
            <button onClick={()=>{translate1Flag = true; setState({});}} className={'iphone-1-image-original-button' + (translate1Flag ? ' invisible' : '')}>Original</button>
          </div>
          <div className='feature-1-info'>
            <div className='feature-1-info-arrow'>
              <img  className='arrow-left-image' src={arrow_left}></img>
            </div>
            <div className='feature-1-info-title'>
            DESCRIPTION TRANSLATION
            </div>
          </div>
        </div>
      
      </div>
      <div className='d-flex justfity-content-center feature-2'>
          {/* <div className='prototypes-title'>Translate</div> */}
          <div className='prototypes'>
            <img className='iphone-2-prototype' src={iphone} width="300"></img>
            <img className={'iphone-2-image-original'} src={kilianjgroupride}></img>
            {/* <img className={'iphone-1-image-translate' + (translate1Flag ? ' invisible' : '')} src={translate2}></img> */}
            {/* <button onClick={()=>{translate1Flag = false; setState({});}} className={'iphone-1-image-translate-button' + (translate1Flag ? '' : ' invisible')}>Translate</button> */}
            {/* <button onClick={()=>{translate1Flag = true; setState({});}} className={'iphone-1-image-original-button' + (translate1Flag ? ' invisible' : '')}>Original</button> */}
          </div>
          <div className='feature-2-info'>
            <div className='feature-2-info-title'>
            GROUP RIDES WITH LIVE LOCATION.
            </div>
            <div className='feature-2-info-title'>
            So that if you get lost, you can easily re-group. Either ways, you can't keep up with Kilian Jornet. 🐐
            </div>
          </div>
        </div>

    </div>

  );
}

export default NewFeatures;
