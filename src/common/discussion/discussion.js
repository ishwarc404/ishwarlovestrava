import './discussion.css';
import React, { useState, useEffect } from 'react';

import kudosLogo from '../../assets/kudos_logo.png'
import axios from "axios";


var userData = {
  time: '',
  comment: ''
} 

function Discussion(props) {

  const [comment, setComment] = React.useState('');


  function postData (){
    console.log(comment);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('comment:', comment);
    axios.post('https://sheet.best/api/sheets/20663903-9d53-43a3-beea-43cb136f12f3', {
    date: Date.now(),  
    comment:comment})
    .then(response => {
      console.log(response);
    })
    
  }



  return (
    <div className={'Discussion' + (props.noBackground ? ' Discussion_control' : '')}>
      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-center give-kudos'>
          <img className='kudos-logo' src={kudosLogo}></img>
          <div className='kudos-counter'>39</div>
        </div>

      </div>
      <form onSubmit={handleSubmit} >
      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-around write-comment'>
          <input className='write-comment-input-box' placeholder="Add a comment. Share your Strava!"  
           value={comment}
           onChange={(e) => {setComment(e.target.value);}} />
        </div>
        <div className='d-flex justify-content-around post-comment'>
        <button className="postButton" type='submit'><div className='write-comment-post-button'><b>Post</b></div></button>
        </div>
      </div>
      </form>
    </div>

  );
}

export default Discussion;
