import './mystrava.css';

import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Discussion from '../../common/discussion/discussion';

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import runimage from '../../assets/run.svg';
import bikeimage from '../../assets/bike.svg';
import swimimage from '../../assets/swim.svg';
import weightimage from '../../assets/weight_training.svg';
import imgs from './images';


var athleteStatsData = {};
var totalActivitiesTillDate = null;
var totalHoursTillDate = null;
var userActivityCount = {};
var userKudosRecievedCount = null;
var latestActivity = {
  'name': null,
  'elapsed_time': null,
  'sport_type': null,
  'kudos_count': null,
  'description': null,
  'total_photo_count': null,
  'photos': null
}
var latestActivityId = null;

const maxActivityPages = 1; //change this to 0 
const baseURL = "https://www.strava.com/api/v3/athletes/43290018/stats";
const singleActivityURL = "https://www.strava.com/api/v3/activities/"
const refreshToken = 'bd8b400a40d972c7e45c69720e41a47f8e661597';
const refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=453c72ddb9de476feab5816537fbd884184b7ced&refresh_token=bd8b400a40d972c7e45c69720e41a47f8e661597&grant_type=refresh_token'
var accessToken = '814ab41c4c149fdcc6ff3e22941e1ca2948fd1a4'
var imageCount = 0
var displayImage = imgs[imageCount]

function convertSeconds(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours   = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  // if (hours   < 10) {hours   = "0"+hours + ":";}
  // if (minutes < 10) {minutes = "0"+minutes + ":";}
  // if (seconds < 10) {seconds = "0"+seconds ;}
  if (hours   == 0 ) {hours   = "";} else { hours = hours + "hrs " ; }
  if (minutes == 0 ) {minutes = "";} else { minutes = minutes + " mins "; }
  if (seconds == 0 ) {seconds = "";} else { seconds = seconds + " seconds"; }

  return hours+minutes+seconds; // Return is HH : MM : SS
}


function Mystrava() {
  const [, setState] = useState();

  const headers = {
    'Authorization': 'Bearer 597e89ece16a36c9021de4aca8a10b46085e5929'
  }

  useEffect(() => {

    axios.post(refreshURL, {
    }).then((response) => {
      console.log(response.data);
      accessToken = response.data['access_token']

      for (var i = 0; i < maxActivityPages; i++) {
        console.log('i is ',i);
        //ALL ACTIVITY DATA
        axios.get(`https://www.strava.com/api/v3/athlete/activities?before=1657381150&page=${i + 1}&per_page=200`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        }).then((response) => {
          totalActivitiesTillDate += response.data.length
          console.log(totalActivitiesTillDate);
          athleteStatsData = response.data;
          console.log(response.data);
          for (var k = 0; k < athleteStatsData.length; k++) {

            totalHoursTillDate += athleteStatsData[k]['elapsed_time'];
            userKudosRecievedCount += athleteStatsData[k]['kudos_count'];

            if (!userActivityCount[athleteStatsData[k]['type']]) {
              userActivityCount[athleteStatsData[k]['type']] = 1;
            } else {
              userActivityCount[athleteStatsData[k]['type']] += 1;
            }
          }
          console.log('outside ths',i)
          if (i === 1) {
            console.log('insuxe ths, first activity')
            latestActivityId = response.data[0]['id'];
            //LATEST ACTIVITY DATA
            axios.get(singleActivityURL + `${latestActivityId}`, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              }
            }).then((response) => {
              console.log('here');
              console.log(response.data);
              latestActivity = response.data;
              setState({});
            });
  
          }

          setState({});
        });
      }
    });


    // axios.get(baseURL, {
    //   headers: headers
    // }).then((response) => {
    //   athleteStatsData = response.data;
    //   totalHoursTillDate = athleteStatsData.all_ride_totals['elapsed_time'] + athleteStatsData.all_run_totals['elapsed_time'] + athleteStatsData.all_swim_totals['elapsed_time'];
    //   totalHoursTillDate = Math.round(totalHoursTillDate / 3600)
    //   setState({});
    // });

    setInterval(function(){ 
      imageCount++
      console.log(imageCount);
      displayImage = imgs[imageCount];
      console.log(displayImage);
      setState({});
    }, 4000);


  }, []);


  return (
    <div>
      <div className="Mystrava">

        <Header />

        <div className='bodycontent_mystrava' style={{
          backgroundImage: `url()`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100vw'
        }}>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 100: 1, 750: 2, 900: 3, 400: 4 }}
          >
            <Masonry>
              <div className='grid-item grid-item-1 total-activities'>
                <div className='grid-item-1-key'>TOTAL ACTIVITIES</div>
                <div className='grid-item-1-value'>{totalActivitiesTillDate}</div>
              </div>
              <div className='grid-item grid-item-2'>
                <div className='grid-item-2-key'>HOURS OF ACTIVITIES</div>
                <div className='grid-item-2-value'>{Math.round(totalHoursTillDate / 3600)}</div>
              </div>
              <div className='grid-item grid-item-3'>
                <div className='grid-item-3-key'>LATEST ACTIVITY</div>
                <div className='grid-item-3-value'>
                  <div className='grid-item-3-value-name'><b>{latestActivity.name}</b></div>
                  <div className='grid-item-3-value-desc'>{latestActivity.description}</div>
                  <div className='grid-item-3-value-time'>{convertSeconds(latestActivity.elapsed_time)} </div>
                  <div className='grid-item-3-value-type'><i>{latestActivity.sport_type}</i>
                  {latestActivity.sport_type == 'Run' ? ( <img className=" activity_icon run" src={runimage}/>) : 
                  latestActivity.sport_type == 'Ride' ? ( <img className=" activity_icon bike" src={bikeimage} />):
                  latestActivity.sport_type == 'Swim' ? ( <img className=" activity_icon swim" src={swimimage} />):
                  latestActivity.sport_type == 'WeightTraining' ? ( <img className=" activity_icon weighttraining" src={weightimage} />):
                  <span></span>
                }
                  </div>
                  <div className='grid-item-3-value-count'>
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" data-testid="unfilled_kudos"><path d="M15.243 7.182a1.907 1.907 0 00-.532-1.423 2.069 2.069 0 00-1.493-.641H9.863l.454-1.812A2.426 2.426 0 008.064.514h-.513l-.718 2.807L4.97 6.915.412 9.34l2.472 6.424 4.278-2.28h4.785a2.142 2.142 0 002.127-1.976l.084-1.177a1.962 1.962 0 00.712-2.097 1.93 1.93 0 00.373-1.052zM1.664 9.807l2.06-1.1 1.748 4.542-2.061 1.1-1.747-4.542zm12.289-2.038l-.268.254.165.331a.942.942 0 01-.044.903.965.965 0 01-.369.352l-.237.131-.122 1.7a1.123 1.123 0 01-1.129 1.049H6.914l-.552.295-1.748-4.547 1.1-.586 2.033-3.92.567-2.166a1.427 1.427 0 011.032 1.371c0 .071 0 .139-.007.167l-.758 3.016h4.64a1.059 1.059 0 01.764.328.917.917 0 01.26.683.942.942 0 01-.292.639z" fill=""></path></svg>                  {latestActivity.kudos_count}
                  </div>
                </div>
              </div>
              <div className='grid-item grid-item-4'>
                <div className='grid-item-4-key'>KUDOS EARNED</div>
                <div className='grid-item-4-value'>{userKudosRecievedCount}</div>
              </div>
              <div className='grid-item grid-item-5'
                       style={{
                        background: `url(${displayImage})`,
                      }}
              >
            
                {/* <div className='grid-item-5-key'>PHOTO ALBUM</div> */}
                <div className='grid-item-5-value'>
                {/* <img  className='photo-album-image' src={imgs[0]}/> */}
                </div>
              </div>
              {/* <div className='grid-item grid-item-6'>
                21.3
              </div> */}
              <div className='grid-item grid-item-7'>
                Run 1
              </div>
              <div className='grid-item grid-item-8'>
                Run 2
              </div>
              <div className='grid-item grid-item-9'>
                <div className='grid-item-9-key'></div>
                <div className='grid-item-9-value'></div>
              </div>

            </Masonry>
          </ResponsiveMasonry>


          <Navbar path={6} />
        </div>
      </div>
      <Discussion />
    </div>

  );
}

export default Mystrava;
