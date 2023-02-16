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
    if(pathValue == 7) {
      leftSignalColor =  greenColor; //green
      rightSignalColor =  redColor; //green
      bottomSignalColor = redColor; //green or red
    }
    setState({});
  },[props.bottomSignalColor])

 function navigateMaster(direction){
    if(pathValue == 1) {
      if(direction === 'right'){
        navigate('/education');
      }
    }
    if(pathValue == 2) {
      if(direction === 'right'){
        navigate('/skills');
      }
      if(direction === 'left'){
        navigate('/home');
      }
    }
    if(pathValue == 3) {
      if(direction === 'right'){
        navigate('/achievements');
      }
      if(direction === 'left'){
        navigate('/education');
      }
    }
    if(pathValue == 4) {
      if(direction === 'right'){
        navigate('/mystrava');
      }
      if(direction === 'left'){
        navigate('/skills');
      }
    }
    if(pathValue == 5) {
      if(direction === 'left'){
        navigate('/achievements');
      }
    }
    if(pathValue == 6) {
      if(direction === 'left'){
        navigate('/achievements');
      }
    }
 }

  return (
    <div>

    <svg className='signal_image' viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <path className="st4" d="M 281.44 702.344 L 279.94 702.344 L 279.94 102.044 C 279.94 84.744 265.94 70.744 248.54 70.744 C 231.24 70.744 217.24 84.744 217.24 102.044 L 217.24 189.344 L 215.84 189.344 L 215.84 102.044 C 215.84 83.944 230.54 69.244 248.64 69.244 C 266.74 69.244 281.44 83.944 281.44 102.044 L 281.44 702.344 Z" style={{fill: 'rgb(153, 153, 153)'}}/>
  <path d="M 205.529 108.248 L 226.229 108.248 C 231.329 108.248 235.529 112.348 235.529 117.548 L 235.529 197.648 C 235.529 202.748 231.429 206.948 226.229 206.948 L 205.529 206.948 C 200.429 206.948 196.229 202.848 196.229 197.648 L 196.229 117.548 C 196.229 112.348 200.429 108.248 205.529 108.248 Z"/>
  <circle onClick={() => { navigateMaster('left'); }} className="st5" cx="215.829" cy="128.748" r="10.5" style={{fill: `${leftSignalColor}`}}/>
  <circle onClick={() => { navigateMaster('right');  }} className="st6" cx="215.829" cy="157.548" r="10.5" style={{fill: `${rightSignalColor}`}}/>
  <circle className="st6" cx="215.829" cy="186.248" r="10.5" style={{fill: `${bottomSignalColor}`}}/>
  <path d="M 209.164 155.346 H 216.219 L 216.219 152.656 L 223.814 157.245 L 216.219 161.834 L 216.219 159.144 H 209.164 V 155.346 Z" style={{paintOrder: 'fill'}} bxShape="arrow 209.164 152.656 14.65 9.178 3.798 7.595 0 1@b92745c0"/>
  <path d="M -255.74 -270.439 H -248.685 L -248.685 -273.129 L -241.09 -268.54 L -248.685 -263.951 L -248.685 -266.641 H -255.74 V -270.439 Z" style={{paintOrder: 'fill'}} transform="matrix(0, 1, -1, 0, -52.664806, 435.162903)" bxShape="arrow -255.74 -273.129 14.65 9.178 3.798 7.595 0 1@fda6ffeb"/>
  <path d="M -222.245 -130.438 H -215.19 L -215.19 -133.128 L -207.595 -128.539 L -215.19 -123.95 L -215.19 -126.64 H -222.245 V -130.438 Z" style={{paintOrder: 'fill'}} transform="matrix(-1, 0, 0, -1, 0, 0)" bxShape="arrow -222.245 -133.128 14.65 9.178 3.798 7.595 0 1@31b5b674"/>
</svg>

    </div>

  );
}

export default Signal;


