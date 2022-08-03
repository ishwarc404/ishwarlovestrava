import './signal.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

var pathValue = 1;

var leftSignalColor =  'rgb(52, 227, 43)' //green
var rightSignalColor =  'rgb(52, 227, 43)' //green
var bottomSignalColor = 'rgb(52, 227, 43)' //green
var greenColor = 'rgb(52, 227, 43)' //green
var redColor = 'rgb(255, 6, 36)'; //red


function Signal(props) {
  const [, setState] = useState();
  let navigate = useNavigate();

  pathValue = props.path;

  useEffect(() => {
    if(pathValue == 1) {
      leftSignalColor =  redColor; //green
      rightSignalColor =  greenColor; //green
      bottomSignalColor = props.bottomSignalColor; //green or red
    }
    if(pathValue == 2 || pathValue == 3 || pathValue == 4) {
      leftSignalColor =  greenColor; //green
      rightSignalColor =  greenColor; //green
      bottomSignalColor = redColor; //green
    }
    if(pathValue == 5) {
      leftSignalColor =  greenColor; //green
      rightSignalColor =  greenColor; //green
      bottomSignalColor = redColor; //green
    }
    if(pathValue == 6) {
      leftSignalColor =  greenColor; //green
      rightSignalColor =  redColor; //green
      bottomSignalColor = props.bottomSignalColor; //green or red
    }
    setState({});
  },[props.bottomSignalColor])

 

  function componentWillReceiveProps(nextProps) {
    for (const index in nextProps) {
      if (nextProps[index] !== this.props[index]) {
        console.log(index, this.props[index], '-->', nextProps[index]);
      }
    }
  }


  return (
    <div>
    <svg className='signal_image' viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <path d="M 236.933 189.219 L 257.633 189.219 C 262.733 189.219 266.933 193.319 266.933 198.519 L 266.933 278.619 C 266.933 283.719 262.833 287.919 257.633 287.919 L 236.933 287.919 C 231.833 287.919 227.633 283.819 227.633 278.619 L 227.633 198.519 C 227.633 193.319 231.833 189.219 236.933 189.219 Z"/>
    <circle class="st5" cx="247.233" cy="209.719" r="10.5" style={{fill: `${leftSignalColor}`}}/>
    <circle class="st6" cx="247.233" cy="238.519" r="10.5" style={{fill: `${rightSignalColor}`}}/>
    <circle class="st6" cx="247.233" cy="267.219" r="10.5" style={{fill: `${bottomSignalColor}`}}/>
    <path d="M 240.568 236.317 H 247.623 L 247.623 233.627 L 255.218 238.216 L 247.623 242.805 L 247.623 240.115 H 240.568 V 236.317 Z" style={{paintOrder: 'fill'}} bxShape="arrow 240.568 233.627 14.65 9.178 3.798 7.595 0 1@6a648bc9"/>
    <path d="M -255.74 -270.439 H -248.685 L -248.685 -273.129 L -241.09 -268.54 L -248.685 -263.951 L -248.685 -266.641 H -255.74 V -270.439 Z" style={{paintOrder: 'fill'}} transform="matrix(0, 1, -1, 0, -21.260382, 516.134338)" bxShape="arrow -255.74 -273.129 14.65 9.178 3.798 7.595 0 1@fda6ffeb"/>
    <path d="M -253.649 -211.409 H -246.594 L -246.594 -214.099 L -238.999 -209.51 L -246.594 -204.921 L -246.594 -207.611 H -253.649 V -211.409 Z" style={{paintOrder: 'fill'}} transform="matrix(-1, 0, 0, -1, 0, 0)" bxShape="arrow -253.649 -214.099 14.65 9.178 3.798 7.595 0 1@0326798d"/>
    </svg>
    </div>

  );
}

export default Signal;


