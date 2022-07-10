import './mystrava.css';


import React, { useState, useEffect } from 'react';

// import heatmap from '../../assets/heatmaporiginal.png';
import axios from "axios";

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Discussion from '../../common/discussion/discussion';

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


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

const maxActivityPages = 0;
const baseURL = "https://www.strava.com/api/v3/athletes/43290018/stats";
const singleActivityURL = "https://www.strava.com/api/v3/activities/"
const refreshToken = 'bd8b400a40d972c7e45c69720e41a47f8e661597';
const refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=453c72ddb9de476feab5816537fbd884184b7ced&refresh_token=bd8b400a40d972c7e45c69720e41a47f8e661597&grant_type=refresh_token'
var accessToken = '814ab41c4c149fdcc6ff3e22941e1ca2948fd1a4'

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
          // if (i + 1 === maxActivityPages) {
          //   latestActivityId = response.data['id']
          // }
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
          // console.log(userActivityCount);
          // totalHoursTillDate = totalHoursTillDate;
          // console.log(totalHoursTillDate);
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
                <div className='grid-item-3-value'>info about it</div>
              </div>
              <div className='grid-item grid-item-4'>
                <div className='grid-item-4-key'>KUDOS EARNED</div>
                <div className='grid-item-4-value'>{userKudosRecievedCount}</div>
              </div>
              <div className='grid-item grid-item-5'>
                <div className='grid-item-5-key'>PHOTO ALBUM</div>
                <div className='grid-item-5-value'></div>
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
