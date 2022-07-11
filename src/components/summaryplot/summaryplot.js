import './summaryplot.css';

import ishwarname from '../../assets/ishwar.png';
import xletter from '../../assets/x.png';
import strava from '../../assets/b&w.png';

import React, { useState, useEffect } from 'react';


var mileageData = null
var mileageDataComponent = [];
var strokeComponentPoints = ""
var userSelectedActivityType = 'Run'
var maxMileage = 100
var maxHeight = ""
function SummaryPlot(props) {
  const [, setState] = useState();


  useEffect(() => {
    var mileageData = props.mileageData;
    var userSelectedActivityType = props.userSelectedActivityType;
    console.log(userSelectedActivityType);
    if(userSelectedActivityType === 'Run'){
      mileageData.miles = [];
      for (const [key, value] of Object.entries(mileageData['run_miles'])) {
        mileageData.miles.push(mileageData['run_miles'][key].reduce((a, b) => a + b, 0));
      }
      console.log( mileageData.miles);
    }
    if(userSelectedActivityType === 'Ride'){
      for (const [key, value] of Object.entries(mileageData['ride_miles'])) {
        mileageData.miles.push(mileageData['ride_miles'][key].reduce((a, b) => a + b, 0));
      }
    }
    // if(userSelectedActivityType =='Swim'){
    //   for (const [key, value] of Object.entries(mileageData['run_miles'])) {
    //     mileageData.miles.push(mileageData['run_miles'][key].reduce((a, b) => a + b, 0));
    //   }
    // }
    if(userSelectedActivityType =='WeightTraining'){
      for (const [key, value] of Object.entries(mileageData['weight_training_times'])) {
        mileageData.miles.push(mileageData['weight_training_times'][key].reduce((a, b) => a + b, 0));
      }
    }
    var x_value = 0;
    mileageDataComponent = [];
    strokeComponentPoints = [];
    const maxValue = mileageData.miles.reduce((a, b) => { return Math.max(a, b) }); //will help set height
    maxHeight = 150 + 'px';
    // mileageData.miles = [0,20000,30000,20000,20000,20000,0,20000,20000]
    //need to reverse this - done
    var multiplierVis = 3.5;
    //3.5 below is the height multiplier which aids in visualisation
    for (var i = mileageData.miles.length - 1; i >= 0; i--) {
      //diving by 1000 because it is in meters
      mileageDataComponent.push(
        <circle className="quiz-graph-start-dot" cx={x_value} cy={(150)-((mileageData.miles[i]*multiplierVis/1000))} key={x_value} data-value="7.2" r="6"></circle>
      )
      strokeComponentPoints = strokeComponentPoints + `${x_value},${(150)-(mileageData.miles[i]*multiplierVis/1000)} `;
      // console.log(strokeComponentPoints);
      x_value += 30;
      
    }
    // setState({});
  })

  return (
    <div className='SummaryPlot'>
      <div className="">

        <div>
         
          <svg className="quiz-graph">
            <defs>
              <pattern id="grid" width="30" height="10" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 0 0 0 50" fill="none" stroke="#cfcfcf" stroke-width="1"></path>
              </pattern>
            </defs>
            <rect x="0" width="300px" height={maxHeight} fill="url(#grid)" stroke="gray"></rect>
            <g className="label-title">
            </g>

            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#fc5200',stopOpacity:1}}></stop>
              <stop offset="100%" style={{stopColor:'white',stopOpacity:'0'}}></stop>
            </linearGradient>
            {/* <polyline fill="url(#grad)" stroke="#fc5200" stroke-width="0" points="
            50,300
            51,0
            150,100
            250,80
            350,160
            450,100
            550,100
            650,150
            750,200 
            750,300
            "></polyline>

          */}
            <polyline fill="none" stroke="#fc5200" stroke-width="2" points={strokeComponentPoints}></polyline> 
          
            <g>
{mileageDataComponent}
            </g>
          </svg>
        </div>
      </div>

    </div>

  );
}

export default SummaryPlot;
