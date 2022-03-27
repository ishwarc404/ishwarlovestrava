import './App.css';


function App() {

  // handleClick = () => {
    
  // };


  return (
    <div className="App">

      <div className='header_1'>
        <div class="d-flex justify-content-between">
          <div class="header_content_1">ishwar x Strava</div>
          <div class="header_content_2">
            <a class="email_href" href=''>email</a>
            </div>
        </div>
      </div>

      <div className='header_2'>
        Hi there, <span className='highlight_block'>I'm Ishwar</span>, and this is my resume for the intern position
        at Strava. 
        <br></br>
        I hope you give me a chance to show you why I would be a 
        great fit as part of your <br></br><span className='highlight_block'>engineering team and community.</span>
        <br></br>
        <br></br>
        Thanks :)
      </div>


      <div className='body_content_1 body_content_all'>
        about me
      </div>

      <div className='body_content_2 body_content_all'>
        education & experience
      </div>

      <div className='body_content_3 body_content_all'>
        technical "prowess"
      </div>

      <div className='body_content_4 body_content_all'>
        why hire me? 
      </div>

      <div className='body_content_5 body_content_all'>
        my Strava 
      </div>

    </div>
  );
}

export default App;
