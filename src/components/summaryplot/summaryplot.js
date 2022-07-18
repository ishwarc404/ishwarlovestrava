import './summaryplot.css';

import ishwarname from '../../assets/ishwar.png';
import xletter from '../../assets/x.png';
import strava from '../../assets/b&w.png';

import React, { useState, useEffect } from 'react';


var mileageData = {miles:[0,0,0,0,0,0,0,0,0,0], times:[0,0,0,0,0,0,0,0,0,0]};
var mileageDataComponent = [];
var strokeComponentPoints = ""
var strokeComponentPoints2 = ""
var userSelectedActivityType = 'Run'
var maxMileage = 100
var maxHeight = ""
var onHoverDistance = 0;
var onHoverTime = 0;
var multiplierVis = 3.5;
//3.5 below is the height multiplier which aids in visualisation


function convertSeconds(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds

  if (hours == 0) { hours = ""; } else { hours = hours + "hrs "; }
  if (minutes == 0) { minutes = ""; } else { minutes = minutes + " mins "; }
  if (seconds == 0) { seconds = ""; } else { seconds = seconds + " secs"; }

  return hours + minutes; // Return is HH : MM : SS
}



function SummaryPlot(props) {
  const [, setState] = useState();


  useEffect(() => {
    mileageData = props.mileageData;
    userSelectedActivityType = props.userSelectedActivityType;
    // console.log(userSelectedActivityType);
    if (userSelectedActivityType === 'Run') {
      mileageData.miles = [];
      mileageData.times = [];
      for (const [key, value] of Object.entries(mileageData['run_miles'])) {
        mileageData.miles.push(mileageData['run_miles'][key].reduce((a, b) => a + b, 0));
        mileageData.times.push(mileageData['run_times'][key].reduce((a, b) => a + b, 0));
        // console.log('here!',mileageData['times']);
      }
      // console.log(mileageData.miles);
    }
    if (userSelectedActivityType === 'Ride') {
      mileageData.miles = [];
      mileageData.times = [];
      for (const [key, value] of Object.entries(mileageData['ride_miles'])) {
        // console.log(mileageData['ride_times']);
        mileageData.miles.push(mileageData['ride_miles'][key].reduce((a, b) => a + b, 0));
        mileageData.times.push(mileageData['ride_times'][key].reduce((a, b) => a + b, 0));
      }
    }
    // if(userSelectedActivityType =='Swim'){
    //   for (const [key, value] of Object.entries(mileageData['run_miles'])) {
    //     mileageData.miles.push(mileageData['run_miles'][key].reduce((a, b) => a + b, 0));
    //   }
    // }
    if (userSelectedActivityType == 'WeightTraining') {
      mileageData.miles = [];
      mileageData.times = [];
      for (const [key, value] of Object.entries(mileageData['weight_training_times'])) {
        //it will be time for both
        mileageData.miles.push(mileageData['weight_training_times'][key].reduce((a, b) => a + b, 0));
        mileageData.times.push(mileageData['weight_training_times'][key].reduce((a, b) => a + b, 0));
      }
    }
    var x_value = 0;
    mileageDataComponent = [];
    strokeComponentPoints = [];
    const maxValue = mileageData.miles.reduce((a, b) => { return Math.max(a, b) }); //will help set height
    maxHeight = 150 + 'px';
    // mileageData.miles = [0,20000,30000,20000,20000,20000,0,20000,20000]
    //need to reverse this - done

    for (var i = mileageData.miles.length - 1; i >= 0; i--) {
      //diving by 1000 because it is in meters
      // mileageDataComponent.push(
      //   // <circle className="quiz-graph-start-dot"  onMouseEnter={(e)=>{console.log(e)}} cx={x_value} cy={(150) - ((mileageData.miles[i] * multiplierVis / 1000))} key={x_value} data-value="7.2" r="6"></circle>
      // )
      strokeComponentPoints = strokeComponentPoints + `${x_value},${(150) - (mileageData.miles[i] * multiplierVis / 1000)} `;
      // console.log(strokeComponentPoints);
      x_value += 30;

    }
    onHoverDistance = parseFloat(mileageData.miles[9]/1000).toFixed(1) + "km"; 
    onHoverTime = convertSeconds(mileageData.times[9]); 
  })

  return (
    <div className='SummaryPlot'>
      <div className='d-flex justify-content-start summary-stats'>
        <div className='stat-1'>
          <div className='stat-title'>Distance</div>
          <div className='stat-info'>{onHoverDistance}</div>
        </div>
        <div className='stat-line'></div>
        <div className='stat-2'>
          <div className='stat-title'>Time</div>
          <div className='stat-info'>{onHoverTime}</div>
        </div>
        {/* <div className='stat-line'></div> */}
        {/* <div className='stat-3'>                      
                  <div className='stat-title'>Elevation Gain</div>
                  <div className='stat-info'>110 m</div>
                </div> */}
      </div>
      <div className="d-flex justify-content-start graph-container">
        <div>
          <svg className="quiz-graph">
            <defs>
              <pattern id="grid" width="30" height="10" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 0 0 0 50" fill="none" stroke="#cfcfcf" strokeWidth="1"></path>
              </pattern>
            </defs>
            <defs>
              <pattern id="grid" width="30" height="10" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 0 0 0 50" fill="none" stroke="#cfcfcf" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect x="0" width="300px" height={maxHeight} fill="url(#grid)" stroke="gray"></rect>
            <g className="label-title">
            </g>

            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#fc5200', stopOpacity: 1 }}></stop>
              <stop offset="100%" style={{ stopColor: 'white', stopOpacity: '0' }}></stop>
            </linearGradient>
            <polyline fill="url(#grad)"  stroke="#fc5200" strokeWidth="0" points={strokeComponentPoints}></polyline>
            <polyline fill="none" stroke="#fc5200" strokeWidth="2" points={strokeComponentPoints}></polyline>

            <g>
            <circle className="quiz-graph-start-dot"  onMouseEnter={()=>{onHoverDistance = userSelectedActivityType==='WeightTraining' ? "0.0 km" : parseFloat(mileageData.miles[9]/1000).toFixed(1) + "km";  onHoverTime = convertSeconds(mileageData.times[9]); setState({});}} cx={0} cy={(150) - ((mileageData.miles[9] * multiplierVis / 1000))}  data-value="7.2" r="6"></circle>
            <circle className="quiz-graph-start-dot"  onMouseEnter={()=>{onHoverDistance = userSelectedActivityType==='WeightTraining' ? "0.0 km" : parseFloat(mileageData.miles[8]/1000).toFixed(1) + "km";  onHoverTime = convertSeconds(mileageData.times[8]); setState({});}} cx={30} cy={(150) - ((mileageData.miles[8] * multiplierVis / 1000))}  data-value="7.2" r="6"></circle>
            <circle className="quiz-graph-start-dot"  onMouseEnter={()=>{onHoverDistance = userSelectedActivityType==='WeightTraining' ? "0.0 km" : parseFloat(mileageData.miles[7]/1000).toFixed(1) + "km";  onHoverTime = convertSeconds(mileageData.times[7]); setState({});}} cx={60} cy={(150) - ((mileageData.miles[7] * multiplierVis / 1000))}  data-value="7.2" r="6"></circle>
            <circle className="quiz-graph-start-dot"  onMouseEnter={()=>{onHoverDistance = userSelectedActivityType==='WeightTraining' ? "0.0 km" : parseFloat(mileageData.miles[6]/1000).toFixed(1) + "km";  onHoverTime = convertSeconds(mileageData.times[6]); setState({});}} cx={90} cy={(150) - ((mileageData.miles[6] * multiplierVis / 1000))}  data-value="7.2" r="6"></circle>
            <circle className="quiz-graph-start-dot"  onMouseEnter={()=>{onHoverDistance = userSelectedActivityType==='WeightTraining' ? "0.0 km" : parseFloat(mileageData.miles[5]/1000).toFixed(1) + "km";  onHoverTime = convertSeconds(mileageData.times[5]); setState({});}} cx={120} cy={(150) - ((mileageData.miles[5] * multiplierVis / 1000))}  data-value="7.2" r="6"></circle>
            <circle className="quiz-graph-start-dot"  onMouseEnter={()=>{onHoverDistance = userSelectedActivityType==='WeightTraining' ? "0.0 km" : parseFloat(mileageData.miles[4]/1000).toFixed(1) + "km";  onHoverTime = convertSeconds(mileageData.times[4]); setState({});}} cx={150} cy={(150) - ((mileageData.miles[4] * multiplierVis / 1000))}  data-value="7.2" r="6"></circle>
            <circle className="quiz-graph-start-dot"  onMouseEnter={()=>{onHoverDistance = userSelectedActivityType==='WeightTraining' ? "0.0 km" : parseFloat(mileageData.miles[3]/1000).toFixed(1) + "km";  onHoverTime = convertSeconds(mileageData.times[3]); setState({});}} cx={180} cy={(150) - ((mileageData.miles[3] * multiplierVis / 1000))}  data-value="7.2" r="6"></circle>
            <circle className="quiz-graph-start-dot"  onMouseEnter={()=>{onHoverDistance = userSelectedActivityType==='WeightTraining' ? "0.0 km" : parseFloat(mileageData.miles[2]/1000).toFixed(1) + "km";  onHoverTime = convertSeconds(mileageData.times[2]); setState({});}} cx={210} cy={(150) - ((mileageData.miles[2] * multiplierVis / 1000))}  data-value="7.2" r="6"></circle>
            <circle className="quiz-graph-start-dot"  onMouseEnter={()=>{onHoverDistance = userSelectedActivityType==='WeightTraining' ? "0.0 km" : parseFloat(mileageData.miles[1]/1000).toFixed(1) + "km";  onHoverTime = convertSeconds(mileageData.times[1]); setState({});}} cx={240} cy={(150) - ((mileageData.miles[1] * multiplierVis / 1000))}  data-value="7.2" r="6"></circle>
            <circle className="quiz-graph-start-dot"  onMouseEnter={()=>{onHoverDistance = userSelectedActivityType==='WeightTraining' ? "0.0 km" : parseFloat(mileageData.miles[0]/1000).toFixed(1) + "km";  onHoverTime = convertSeconds(mileageData.times[0]); setState({});}} cx={270} cy={(150) - ((mileageData.miles[0] * multiplierVis / 1000))}  data-value="7.2" r="6"></circle>
            </g>
          </svg>
        </div>
      </div>

    </div>

  );
}

export default SummaryPlot;
