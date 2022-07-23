import './discussion.css';


import kudosLogo from '../../assets/kudos_logo.png'


function Discussion() {


  return (
    <div className='Discussion'>
      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-center give-kudos'>
          <img className='kudos-logo' src={kudosLogo}></img>
          <div className='kudos-counter'>39</div>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-around write-comment'>
          <input className='write-comment-input-box' placeholder="Add a comment"></input>
        </div>
        <div className='d-flex justify-content-around post-comment'>
          <div className='write-comment-post-button'><b>Post</b></div>
        </div>
      </div>
    </div>

  );
}

export default Discussion;
