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
var didComment = false;
var userComments = [];
var userComments2 = [];

function Discussion(props) {

  const [comment, setComment] = React.useState('');
  const [, setState] = useState();


  useEffect(() => {
    const get_ip = async () => {
      // console.log("got here");
      const response = await fetch("https://geolocation-db.com/json/");
      const data = await response.json();
      user_ip_ = data.IPv4;
      setState({});

      //getting kudos
      axios.get('https://sheet.best/api/sheets/a41c21aa-1c83-4b4f-a478-549345179b89')
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

        //getting comments
        axios.get('https://sheet.best/api/sheets/20663903-9d53-43a3-beea-43cb136f12f3')
        .then(response => {
          userComments = []
          userComments2 = []
          for (var i = response.data.length-1; i > 0; i--) {
            if (response.data[i]['comment'] && i>response.data.length-10) {
              userComments.push(
                <div className='comments-1'>
                  {response.data[i]['comment']}</div>
              )
              setState({});
            }
            if (response.data[i]['comment'] && i<response.data.length-10 && i>=0) {
              userComments2.push(
                <div className='comments-1'>
                  {response.data[i]['comment']}</div>
              )
              setState({});
            }
          }
        })


    };

    get_ip();

  }, [])

  function handleSubmit(event) {
    event.preventDefault();
    if (comment.length != 0 || comment != '' || comment != null || comment.length > 200) {
      axios.post('https://sheet.best/api/sheets/20663903-9d53-43a3-beea-43cb136f12f3', {
        date: Date.now(),
        comment: comment
      })
        .then(response => {
          didComment = true;
          userComments.unshift(
            <div className='comments-1'>
            {comment}</div>
          );
          setState({});
        })

    }

  }

  function handleKudosSubmit(event) {

    if (!kudos_given_before) {
      axios.post('https://sheet.best/api/sheets/a41c21aa-1c83-4b4f-a478-549345179b89', {
        ip: user_ip_,
        date: Date.now(),
        kudos: 1
      })
        .then(response => {
          kudos_counter += 1;
          kudos_given_before = true;
          setState({});
        })

    }

    setState({});

    event.preventDefault();

  }




  return (
    <div className={'Discussion' + (props.noBackground ? ' Discussion_control' : '')}>
      <div className='d-flex justify-content-around'>
        <div className='div-part-1'>
        {userComments}
        </div>
        <div className='div-part-2'>      
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
            <div className={'d-flex justify-content-center' + (didComment ? ' thanks-comment' : ' thanks-comment-invisible')}>
              <span className='thanks-highlight'>Thanks!</span>
            </div>
          </form></div>
        <div className='div-part-3'>
{userComments2}
        </div>
      </div>

    </div>

  );
}

export default Discussion;
