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
    const get_ip = async () => {
      console.log("got here");
      const response = await fetch("https://geolocation-db.com/json/");
      const data = await response.json();
      user_ip_ = data.IPv4;
      setState({});

      axios.get('https://sheet.best/api/sheets/f03e4f53-e301-449b-b2ea-743bef0a5e23')
        .then(response => {
          kudos_counter = response.data.length;
          setState({});
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i]['ip'] === data.IPv4) {
              kudos_given_before = true;
              setState({});
            }
          }
        })


    };

    get_ip();



  }, [])

  function handleSubmit(event) {
    event.preventDefault();
    console.log('comment:', comment);
    axios.post('https://sheet.best/api/sheets/20663903-9d53-43a3-beea-43cb136f12f3', {
      date: Date.now(),
      comment: comment
    })
      .then(response => {
        console.log(response);
      })

  }

  function handleKudosSubmit(event) {

    // axios.get('https://sheet.best/api/sheets/f03e4f53-e301-449b-b2ea-743bef0a5e23')
    //   .then(response => {
    //     console.log('kudo handler!');
    //     // console.log(response.data);
    //     kudos_counter = response.data.length;
    //     for (var i = 0; i < response.data.length; i++) {
    //       // console.log(response.data[i]['ip']);
    //       if (response.data[i]['ip'] === user_ip_) {
    //         console.log('here', user_ip_);
    //         console.log('here', response.data[i]);
    //         kudos_given_before = true;
    //       }
    //       else {

    //       }
    //     }
    if (!kudos_given_before) {
      console.log('there');
      axios.post('https://sheet.best/api/sheets/f03e4f53-e301-449b-b2ea-743bef0a5e23', {
        ip: user_ip_,
        date: Date.now(),
        kudos: 1
      })
        .then(response => {
          kudos_counter +=1 ;
          kudos_given_before = true;
          setState({});
        })

    }

    setState({});
      // })

    // console.log(user_ip_);
    event.preventDefault();
    // if(!kudos_given_before){



    // }
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
              onChange={(e) => { setComment(e.target.value); }} />
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
