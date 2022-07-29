import './discussion.css';
import React, { useState, useEffect } from 'react';

import kudosLogo from '../../assets/kudos_logo.png'
import axios from "axios";


var userData = {
  time: '',
  comment: ''
} 

var kudos_counter = 0;
var user_ip_ = null;
var kudos_given_before = false;
function Discussion(props) {

  const [comment, setComment] = React.useState('');
  const [, setState] = useState();


  useEffect(() => {

    // axios.get('https://geolocation-db.com/json/')
    // .then(response => {
    //   user_ip  = response.data.IPv4;
    //   setState({});
    // })
    const get_ip = async () => {
      console.log("got here");
      const response = await fetch("https://geolocation-db.com/json/");
      const data = await response.json();
      // console.log(data);
      // user_ip = data.IPv4;
      axios.get('https://sheet.best/api/sheets/a41c21aa-1c83-4b4f-a478-549345179b89')
      .then(response => {
        kudos_counter = response.data.length;
        var user_ip = data.IPv4;
        user_ip_ = user_ip;
        // console.log(user_ip_);
        for(var i=0 ;i<response.data.lengths_counter;i++){
          console.log(response.data[i]['ip']);
          if(response.data[i]['ip'] === user_ip){

            kudos_given_before = true;
          }
        }
        setState({});
      })
    };
    
    get_ip();
      // user_ip  = get_ip().IPv4;
      // setState({});




  })

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

  function handleKudosSubmit(event) {
    console.log(user_ip_);
    event.preventDefault();
    if(!kudos_given_before){

    axios.post('https://sheet.best/api/sheets/a41c21aa-1c83-4b4f-a478-549345179b89', {
    ip:user_ip_,
    date: Date.now(),  
    kudos:1})
    .then(response => {
      console.log(response);
    })
          
    }
  }




  return (
    <div className={'Discussion' + (props.noBackground ? ' Discussion_control' : '')}>
      <div onClick={handleKudosSubmit} className='d-flex justify-content-center kudos-parent'>
        <div className='d-flex justify-content-center give-kudos'>
          <img className='kudos-logo' src={kudosLogo}></img>
          <div className='kudos-counter'>{kudos_counter}</div>
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
