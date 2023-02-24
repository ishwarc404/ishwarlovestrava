import './mystrava.css';
import './loader.css'
import './newfeatures.css'

var polyline = require('@mapbox/polyline');
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Discussion from '../../common/discussion/discussion';
import SummaryPlot from '../../components/summaryplot/summaryplot';
import NewFeatures from './newfeatures';
import { useLocation } from 'react-router-dom'
import runimage from '../../assets/run.svg';
import bikeimage from '../../assets/bike.svg';
import swimimage from '../../assets/swim.svg';
import weightimage from '../../assets/weight_training.svg';
import premiumBadge from '../../assets/badges.svg';
import imgs from './images';
import iphone from '../../assets/iphone.png';
import trophy_video from '../../assets/trophy.mp4';
import dnf_video from '../../assets/dnf.mp4';
import segments_video from '../../assets/segments.mp4';
import stravawall from '../../assets/strava_wall_transparent.png';
import signal from '../../assets/left_down_signal.png';
import Signal from '../../common/signal/signal';
import Sidebar from '../../common/sidebar/sidebar';
import SegmentStory from './SegmentStory';
import mydata from './mydata';

var isLoaderActive = true;
var isClientLoggedIn = false

var athleteProfileData = {
  lastname: '',
  firstname: '',
  city: '',
  state: '',
  bio: ''
}
var athleteStatsData = {};
var totalActivitiesTillDate = 0;
var totalHoursTillDate = 0;
var userActivityCount = {};
var userKudosRecievedCount = 0;
var latestActivity = {
  'name': null,
  'elapsed_time': "",
  'sport_type': null,
  'kudos_count': null,
  'description': null,
  'total_photo_count': null,
  'photos': null
}
var latestActivityPolyline = '';
var latestActivityId = 0;

const maxActivityPages = 5; //change this to 3 or 0
const baseURL = "https://www.strava.com/api/v3/athletes/43290018/stats";
const athleteDataURL = "https://www.strava.com/api/v3/athlete";
const singleActivityURL = "https://www.strava.com/api/v3/activities/"

//THERE ARE TWO REFRESH TOKENS! ONE WITH MORE POWER, WE GOTTA AUTHENTICATE FIRST HERE:
//https://www.strava.com/oauth/authorize?client_id=89361&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read_all,activity:read_all
//WE USE THIS TO GET CODE, THEN GET REFRESH TOKEN USING POST HERE 'https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&refresh_token=c7d75b54c367cd8b11c68aa490c923c40ec633a4&code=<CODEENTER>&grant_type=authorization_code'
//, THEN USE THAT TO GET ACCESS CODE

// const refreshURL = "https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&refresh_token=c7d75b54c367cd8b11c68aa490c923c40ec633a4&grant_type=refresh_token"
const refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&refresh_token=c5246811c4f2f0c60ff41831355892a639a6b4c0&grant_type=refresh_token'

var accessToken = ''
var imageCount = 0
var displayImage = imgs[imageCount]
var latestActivityFlag = true;
var latestActivityIdForLink = null;
var apiErrorOccured = false;
var userSelectedActivityType = 'Run'
var mileageData = {
  maxMileage: 100,
  miles: [], //this will be the final reduced mileages 
  times: [], //this will be the final reduced mileages 

  run_miles: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
  run_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
  run_elevation: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
  ride_miles: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
  ride_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
  ride_elevation: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
  weight_training_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
}
var previousMondays = []

function convertSeconds(value) {

  if (!value) {
    return "";
  }
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds

  if (hours == 0) { hours = ""; } else { hours = hours + "hrs "; }
  if (minutes == 0) { minutes = ""; } else { minutes = minutes + " mins "; }
  if (seconds == 0) { seconds = ""; } else { seconds = seconds + " secs"; }

  return hours + minutes + seconds; // Return is HH : MM : SS
}

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay();
  var diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  var finalDate = new Date(d.setDate(diff));
  finalDate.setHours(0, 0, 0, 0);
  return finalDate;
}


var bottomSignalColor = 'rgb(52, 227, 43)'; 

function Mystrava() {
  const [, setState] = useState();
  const location = useLocation();
  ///OAUTH FEATURE TEST CODE BEGINS
  ///OAUTH FEATURE TEST CODE BEGINS
  ///OAUTH FEATURE TEST CODE BEGINS
  ///OAUTH FEATURE TEST CODE BEGINS
  ///OAUTH FEATURE TEST CODE BEGINS
  ///OAUTH FEATURE TEST CODE BEGINS
  ///OAUTH FEATURE TEST CODE BEGINS
  ///OAUTH FEATURE TEST CODE BEGINS
  ///OAUTH FEATURE TEST CODE BEGINS
  ///OAUTH FEATURE TEST CODE BEGINS
  ///OAUTH FEATURE TEST CODE BEGINS
  function getRefreshTokenandAccessTokenOAUTH(authToken) {
          isClientLoggedIn = true
          //RESET ALL!
          athleteStatsData = {};
          totalActivitiesTillDate = 0;
          totalHoursTillDate = 0;
          userActivityCount = {};
          userKudosRecievedCount = 0;
          latestActivity = {
            'name': null,
            'elapsed_time': null,
            'sport_type': null,
            'kudos_count': null,
            'description': null,
            'total_photo_count': null,
            'photos': null,
            'map': {
              'summary_polyline': 'testing'
            }
          }
          latestActivityId = 0;
          mileageData = {
            maxMileage: 100,
            miles: [], //this will be the final reduced mileages 
            times: [], //this will be the final reduced mileages 
      
            run_miles: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
            run_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
            run_elevation: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
            ride_miles: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
            ride_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
            ride_elevation: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
            weight_training_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
          }
          previousMondays = []
    
    URL = `https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&code=${authToken}&grant_type=authorization_code`
    axios.post(URL, {
    }).then((response) => {
      var clientRefreshToken = response.data['refresh_token'];
      var clientAccessToken = response.data['access_token'];
      console.log(clientRefreshToken)
      console.log(clientAccessToken)
      //GETTING CLIENT ATHLETE PROFILE DATA - SAME CODE AS BELOW- COPYING IT NOW FOR EASE OF USE
      //GETTING ATHLETE PROFILE DATA
      axios.get(athleteDataURL, {
        headers: {
          'Authorization': `Bearer ${clientAccessToken}`,
        }
      }).then((response) => {
        athleteProfileData = response.data;
        setState({});
      })
      .catch(function (error) {
        console.log("API ERROR OCCURED, PLEASE TRY AFTER SOME TIME")
        apiErrorOccured = true;
        setState({});
      });;;


      var currentEpoch = new Date().getTime();
      var currentEpochInDate = new Date(currentEpoch);

      var tenWeeksPriorEpoch = currentEpoch - 6048000000;
      var tenWeeksPriorEpochInDate = new Date(tenWeeksPriorEpoch)

      //need to get epochs of all prev 10 mondays
      var currentWeekMonday = getMonday(currentEpoch);
      previousMondays.push(currentWeekMonday)
      // console.log(new Date(currentWeekMonday));
      for (var i = 1; i < 10; i++) {
        //run 9 times
        var prevMonday = currentWeekMonday - (604800000 * i);
        previousMondays.push(prevMonday);
        // console.log(new Date(prevMonday));
      }


      ////seperated out to prevent any sort of async, only for latest activity
      axios.get(`https://www.strava.com/api/v3/athlete/activities?before=${currentEpoch}&page=${1}&per_page=1`, {
        headers: {
          'Authorization': `Bearer ${clientAccessToken}`,
        }
      }).then((response) => {
      latestActivityId = response.data[0]['id'];
      latestActivityIdForLink = latestActivityId;
      //LATEST ACTIVITY DATA
      axios.get(singleActivityURL + `${latestActivityId}`, {
        headers: {
          'Authorization': `Bearer ${clientAccessToken}`,
        }
      }).then((response) => {
        latestActivity = response.data;
        // console.log(latestActivity)
        if (latestActivity['map']) {
          if (latestActivity['map']['summary_polyline']) {
            latestActivityPolyline = latestActivity['map']['summary_polyline'];
          }
        }
        setState({});
      });
    });


      //MAIN LOOPS BEGINS
      for (var i = 0; i < maxActivityPages; i++) {
        //MILEAGE CALCULATION
        //CURRENT EPOCH -  in milliseconds

        //ALL ACTIVITY DATA
        axios.get(`https://www.strava.com/api/v3/athlete/activities?before=${currentEpoch}&page=${i + 1}&per_page=200`, {
          headers: {
            'Authorization': `Bearer ${clientAccessToken}`,
          }
        }).then((response) => {

          totalActivitiesTillDate += response.data.length
          // console.log(totalActivitiesTillDate);
          athleteStatsData = response.data;
          // console.log(response.data);

          for (var k = 0; k < athleteStatsData.length; k++) {

            totalHoursTillDate += athleteStatsData[k]['elapsed_time'];
            userKudosRecievedCount += athleteStatsData[k]['kudos_count'];

            if (!userActivityCount[athleteStatsData[k]['type']]) {
              userActivityCount[athleteStatsData[k]['type']] = 1;
            } else {
              userActivityCount[athleteStatsData[k]['type']] += 1;
            }

            //MILEAGE CALCULATION
            var activityDate = new Date(athleteStatsData[k]['start_date']);
            // console.log(activityDate);
            // console.log(tenWeeksPriorEpochInDate);
            // console.log("------");
            if (activityDate >= tenWeeksPriorEpochInDate) {
              // console.log('yes!');
              //IT IS IN THE 10 WEEK RANGE
              //ADD IT'S STATS TO THE MILEAGE OBJECT
              var weekValue = null;
              var tempSetVal = true;
              for (var z = 0; z < 10; z++) {
                if (activityDate > previousMondays[z] && tempSetVal) {
                  //activity belongs to that week
                  weekValue = z + 1;
                  tempSetVal = false;
                  if (athleteStatsData[k]['type'] === 'Run') {
                    mileageData.run_miles[weekValue].push(athleteStatsData[k]['distance']);
                    // console.log(mileageData.run_miles);
                    mileageData.run_times[weekValue].push(athleteStatsData[k]['elapsed_time']);
                  }
                  if (athleteStatsData[k]['type'] === 'Ride') {
                    mileageData.ride_miles[weekValue].push(athleteStatsData[k]['distance']);
                    mileageData.ride_times[weekValue].push(athleteStatsData[k]['elapsed_time']);
                  }
                  if (athleteStatsData[k]['type'] === 'WeightTraining') {
                    mileageData.weight_training_times[weekValue].push(athleteStatsData[k]['elapsed_time']);
                  }
                }
                //or else it is checked with the next week.
              }
            }
          }
          isLoaderActive = false;
          setState({});
        });
      }


      //////////////////
      setState({});
    });
  }

  function cleanUpAuthTokenOAUTH(str) {
    return str.split("&")[1].slice(5);
  };

  function handleLogoutOAUTH(){
    isClientLoggedIn = false;
    //RESET ALL!
    athleteStatsData = {};
    totalActivitiesTillDate = 0;
    totalHoursTillDate = 0;
    userActivityCount = {};
    userKudosRecievedCount = 0;
    latestActivity = {
      'name': null,
      'elapsed_time': null,
      'sport_type': null,
      'kudos_count': null,
      'description': null,
      'total_photo_count': null,
      'photos': null,
      'map': {
        'summary_polyline': 'testing'
      }
    }
    latestActivityId = 0;
    mileageData = {
      maxMileage: 100,
      miles: [], //this will be the final reduced mileages 
      times: [], //this will be the final reduced mileages 

      run_miles: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      run_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      run_elevation: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      ride_miles: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      ride_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      ride_elevation: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      weight_training_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
    }
    previousMondays = []
    window.location = "/stravalogoutmystrava"
    setState({});
  }

  function handleLoginOAUTH() {
    const redirectUrl = "https://ishwarc404.github.io/ishwarlovestrava/stravaloginmystrava";
    const scope = "read,activity:read_all"
    window.location = `http://www.strava.com/oauth/authorize?client_id=89361&response_type=code&redirect_uri=${redirectUrl}/exchange_token&scope=${scope}`
  }




  ///OAUTH FEATURE TEST CODE ENDS


  function handleScrollRed(){
    bottomSignalColor = 'rgb(255, 6, 36)'; //red
    setState({});
  }


  function handleScrollGreen(){
    bottomSignalColor = 'rgb(52, 227, 43)'; //red
    setState({});
  }

  useEffect(() => {

    
    isLoaderActive = true;

    //RESET ALL!
    athleteStatsData = {};
    totalActivitiesTillDate = 0;
    totalHoursTillDate = 0;
    userActivityCount = {};
    userKudosRecievedCount = 0;
    latestActivity = {
      'name': null,
      'elapsed_time': null,
      'sport_type': null,
      'kudos_count': null,
      'description': null,
      'total_photo_count': null,
      'photos': null,
      'map': {
        'summary_polyline': 'testing'
      }
    }
    latestActivityId = 0;
    mileageData = {
      maxMileage: 100,
      miles: [], //this will be the final reduced mileages 
      times: [], //this will be the final reduced mileages 

      run_miles: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      run_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      run_elevation: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      ride_miles: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      ride_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      ride_elevation: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
      weight_training_times: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [] },
    }
    previousMondays = []


    //////TEST CODE////
    if (location.state) {
      if (location.state.href != "stravalogoutmystrava" ) {
        var oauthurl = location.state.href
        const stravaAuthToken = cleanUpAuthTokenOAUTH(oauthurl);
        var clientAuthToken = stravaAuthToken;
        getRefreshTokenandAccessTokenOAUTH(clientAuthToken)
        // isOAuthDone = true;
        isClientLoggedIn = true;
      }
      else {
        isClientLoggedIn = false;
      }
    }
    ///////////////////
    

    if(isClientLoggedIn == false){
    axios.post(refreshURL, {
    }).then((response) => {
      
      accessToken = response.data['access_token'];
      // alert(accessToken);
      // setState({});

      //GETTING ATHLETE PROFILE DATA
      axios.get(athleteDataURL, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      }).then((response) => {
        athleteProfileData = response.data;
        apiErrorOccured = false;
        setState({});
      })
      .catch(function (error) {
        console.log("API ERROR OCCURED, PLEASE TRY AFTER SOME TIME")
        apiErrorOccured = true;
        setState({});
      });;


      var currentEpoch = new Date().getTime();
      var currentEpochInDate = new Date(currentEpoch);

      var tenWeeksPriorEpoch = currentEpoch - 6048000000;
      var tenWeeksPriorEpochInDate = new Date(tenWeeksPriorEpoch)

      //need to get epochs of all prev 10 mondays
      var currentWeekMonday = getMonday(currentEpoch);
      previousMondays.push(currentWeekMonday)
      // console.log(new Date(currentWeekMonday));
      for (var i = 1; i < 10; i++) {
        //run 9 times
        var prevMonday = currentWeekMonday - (604800000 * i);
        previousMondays.push(prevMonday);
        // console.log(new Date(prevMonday));
      }


      ////test - seperated out to prevent any sort of async, only for latest activity
      axios.get(`https://www.strava.com/api/v3/athlete/activities?before=${currentEpoch}&page=${1}&per_page=1`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      }).then((response) => {
      latestActivityId = response.data[0]['id'];
      latestActivityIdForLink = latestActivityId;
      //LATEST ACTIVITY DATA
      axios.get(singleActivityURL + `${latestActivityId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      }).then((response) => {
        latestActivity = response.data;
        // console.log(latestActivity)
        if (latestActivity['map']) {
          if (latestActivity['map']['summary_polyline']) {
            latestActivityPolyline = latestActivity['map']['summary_polyline'];
          }
        }
        setState({});
      });
    });

      //////test ends


      //MAIN LOOPS BEGINS
      for (var i = 0; i < maxActivityPages; i++) {
        //MILEAGE CALCULATION
        //CURRENT EPOCH -  in milliseconds

        //ALL ACTIVITY DATA
        axios.get(`https://www.strava.com/api/v3/athlete/activities?before=${currentEpoch}&page=${i + 1}&per_page=200`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        }).then((response) => {

          totalActivitiesTillDate += response.data.length
          // console.log(totalActivitiesTillDate);
          athleteStatsData = response.data;
          // console.log(response.data);

          for (var k = 0; k < athleteStatsData.length; k++) {

            totalHoursTillDate += athleteStatsData[k]['elapsed_time'];
            userKudosRecievedCount += athleteStatsData[k]['kudos_count'];

            if (!userActivityCount[athleteStatsData[k]['type']]) {
              userActivityCount[athleteStatsData[k]['type']] = 1;
            } else {
              userActivityCount[athleteStatsData[k]['type']] += 1;
            }

            //MILEAGE CALCULATION
            var activityDate = new Date(athleteStatsData[k]['start_date']);
            // console.log(activityDate);
            // console.log(tenWeeksPriorEpochInDate);
            // console.log("------");
            if (activityDate >= tenWeeksPriorEpochInDate) {
              // console.log('yes!');
              //IT IS IN THE 10 WEEK RANGE
              //ADD IT'S STATS TO THE MILEAGE OBJECT
              var weekValue = null;
              var tempSetVal = true;
              for (var z = 0; z < 10; z++) {
                if (activityDate > previousMondays[z] && tempSetVal) {
                  //activity belongs to that week
                  weekValue = z + 1;
                  tempSetVal = false;
                  if (athleteStatsData[k]['type'] === 'Run') {
                    mileageData.run_miles[weekValue].push(athleteStatsData[k]['distance']);
                    // console.log(mileageData.run_miles);
                    mileageData.run_times[weekValue].push(athleteStatsData[k]['elapsed_time']);
                  }
                  if (athleteStatsData[k]['type'] === 'Ride') {
                    mileageData.ride_miles[weekValue].push(athleteStatsData[k]['distance']);
                    mileageData.ride_times[weekValue].push(athleteStatsData[k]['elapsed_time']);
                  }
                  if (athleteStatsData[k]['type'] === 'WeightTraining') {
                    mileageData.weight_training_times[weekValue].push(athleteStatsData[k]['elapsed_time']);
                  }
                }
                //or else it is checked with the next week.
              }

            }



          }
          isLoaderActive = false;
          setState({});

          //lets store all of this data somewhere online
          // mydata.latestActivityId = latestActivityId;
          // mydata.data['athleteProfileData'] = athleteProfileData;
          // mydata.data['athleteStatsData'] = athleteStatsData;
          // mydata.data['totalActivitiesTillDate'] = totalActivitiesTillDate;
          // mydata.data['totalHoursTillDate'] = totalHoursTillDate;
          // mydata.data['latestActivity'] = latestActivity;
          // mydata.data['mileageData'] = mileageData;
        //   axios.put("https://api.jsonbin.io/v3/b/63f65563c0e7653a057c971b", JSON.stringify(mydata), {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "X-Master-Key" : "$2b$10$sBckZTunpNsmdwc0xPC5z.52q0gtCaWifXquNDipFBGY3d9ZF/pgS"
        // }
        // }).then((response) => {
        //   alert(response);
        // });


        });
      }
    });

  }
  }, [isClientLoggedIn]);


  return (
    <div>
      <div className="Mystrava">

        <Header />

        <div className='bodycontent_mystrava'>
          <div className='d-flex justify-content-center stats-div'>
            <div className='first-col'>
              <div className='information-div'>
                <span className='title-total-activities'>TOTAL ACTIVITIES</span>
                {/* <img className="i1" src={total_activities_hand} /> */}
                <div className={'loader' + (isLoaderActive ? '' : 'loader-invisible')} ></div>

                <div className='information-div-child' >{isLoaderActive ? '' : totalActivitiesTillDate}</div>
                <div className='powered-by-api'>Tiles populated by Strava APIv3</div>
              </div>
              <div className='information-div'>
                <span className='title-total-activities'>HOURS OF MOVEMENT</span>
                <div className={'loader' + (isLoaderActive ? '' : 'loader-invisible')} ></div>

                {/* <img className="i2" src={total_hours_hand} /> */}
                <div className='information-div-child'>{isLoaderActive ? '' : Math.round(totalHoursTillDate / 3600)}</div>
              </div>

            </div>
            <div className='center-col'>
              <div className='information-div-center-row'>
                <span className='title-total-activities'>LATEST ACTIVITY</span>
                <div className={'loader' + (isLoaderActive ? '' : 'loader-invisible')} ></div>

                {/* <img className="i3" src={latest_activity_hand} /> */}
                <div>
                  <div className='information-div-child-lots'>
                    <div><b>{isLoaderActive ? '' : latestActivity.name}</b></div>
                    <div>{isLoaderActive ? '' : latestActivity.description}</div>
                    <div><b>{isLoaderActive ? '' : convertSeconds(latestActivity.elapsed_time)}</b></div>
                    <div><b>{isLoaderActive ? '' : parseFloat(latestActivity.distance / 1000).toFixed(1) + " km"}</b></div>
                    {/* <div>{console.log(latestActivityPolyline)}</div> */}
                    <div className='d-flex'>
                      <i>{isLoaderActive ? '' : latestActivity.sport_type}</i>
                      {isLoaderActive ? '' : latestActivity.sport_type == 'Run' ? (<img className=" activity_icon run" src={runimage} />) :
                        latestActivity.sport_type == 'Ride' ? (<img className=" activity_icon bike" src={bikeimage} />) :
                          latestActivity.sport_type == 'Swim' ? (<img className=" activity_icon swim" src={swimimage} />) :
                            latestActivity.sport_type == 'WeightTraining' ? (<img className=" activity_icon weighttraining" src={weightimage} />) :
                              <span></span>
                      }
                      <div className='information-div-kudos-count'>
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" data-testid="unfilled_kudos"><path d="M15.243 7.182a1.907 1.907 0 00-.532-1.423 2.069 2.069 0 00-1.493-.641H9.863l.454-1.812A2.426 2.426 0 008.064.514h-.513l-.718 2.807L4.97 6.915.412 9.34l2.472 6.424 4.278-2.28h4.785a2.142 2.142 0 002.127-1.976l.084-1.177a1.962 1.962 0 00.712-2.097 1.93 1.93 0 00.373-1.052zM1.664 9.807l2.06-1.1 1.748 4.542-2.061 1.1-1.747-4.542zm12.289-2.038l-.268.254.165.331a.942.942 0 01-.044.903.965.965 0 01-.369.352l-.237.131-.122 1.7a1.123 1.123 0 01-1.129 1.049H6.914l-.552.295-1.748-4.547 1.1-.586 2.033-3.92.567-2.166a1.427 1.427 0 011.032 1.371c0 .071 0 .139-.007.167l-.758 3.016h4.64a1.059 1.059 0 01.764.328.917.917 0 01.26.683.942.942 0 01-.292.639z" fill=""></path></svg>
                        {latestActivity.kudos_count}
                      </div>
                     
                    </div>
                    <a target='_blank' href={'https://www.strava.com/activities/'+ latestActivityIdForLink}>
                        <span className="material-symbols-outlined" >
                info
              </span></a>

                  </div>
                </div>
              </div>
              <div className='information-div-center-row-kudos'>
                <span className='title-total-activities'>KUDOS RECEIVED</span>
                <div className={'loader' + (isLoaderActive ? '' : 'loader-invisible')} ></div>
                {/* <img className="i4" src={userKudosRecievedCount ? kudos_received_hand : ""} /> */}
                <div className='information-div-child-kudos'>{isLoaderActive ? '' : userKudosRecievedCount}</div>
              </div>
            </div>
            <div>
              <div className='information-div-weekly-summary'>
                <span className='title-total-activities'>WEEKLY SUMMARY</span>
                {/* <div className={'loader'  + (isLoaderActive ? '' : 'loader-invisible')} ></div> */}

                {/* <img className="i1" src={weekly_summary_hand} /> */}
                <div className='activity-summary-button-suite'>
                  <button className={'activity-summary-button' + (userSelectedActivityType == 'Run' ? ' orange_activity' : ' ')} onClick={() => { userSelectedActivityType = 'Run'; setState({}); }}><img className="activity_icon_inbutton run" src={runimage} />Run</button>
                  <button className={'activity-summary-button' + (userSelectedActivityType == 'Ride' ? ' orange_activity' : ' ')} onClick={() => { userSelectedActivityType = 'Ride'; setState({}); }}><img className=" activity_icon_inbutton bike" src={bikeimage} />Ride</button>
                  {/* <button className={'activity-summary-button' + (userSelectedActivityType == 'Run' ? ' orange_activity' : ' ')} onClick={userSelectedActivityType = 'Swim'}><img className=" activity_icon swim" src={swimimage} />Swim</button> */}
                  <button className={'activity-summary-button' + (userSelectedActivityType == 'WeightTraining' ? ' orange_activity' : ' ')} onClick={() => { userSelectedActivityType = 'WeightTraining'; setState({}); }}>
                    <img className=" activity_icon_inbutton weighttraining" src={weightimage} />Weight Training</button>
                </div>
                <SummaryPlot mileageData={mileageData} userSelectedActivityType={userSelectedActivityType} />
              </div>
              <div className='information-div-profile d-flex'>
                <div className='information-div-image-parent'>
                  <img className={'information-div-profile-athlete-image' + (isLoaderActive ? ' data-invisble' : ' ')} src={athleteProfileData['profile']}></img>
                  <img className={'information-div-profile-athlete-image-badge' + (isLoaderActive ? ' data-invisble' : ' ')} src={premiumBadge}></img>
                </div>
                <div className='information-div-profile-text-container'>
                  <div><a href='https://www.strava.com/athletes/43290018' className='profile_a_tag' target='_blank'><b>{athleteProfileData['firstname'] + ' ' + athleteProfileData['lastname']}</b></a></div>
                  <div className='information-div-profile-text-location' >{athleteProfileData['city'] + ', ' + athleteProfileData['state']}</div>
                  <div className='information-div-profile-text-bio' >{athleteProfileData['bio']}</div>

                </div>
              </div>
            </div>

          </div>
          <div className='d-flex justify-content-center'>
          <button className={'' + (isClientLoggedIn ? 'loginwithStrava-invisible' : 'loginwithStrava')} onClick={handleLoginOAUTH}>Login with Strava to view your stats</button>
          <button className={'' + (isClientLoggedIn ? 'loginwithStrava' : 'loginwithStrava-invisible')} onClick={handleLogoutOAUTH}>Logout</button>
          </div>


          <div className='d-flex justify-content-center'>
            <span className={'' + (apiErrorOccured ? 'apierrordiv' : 'apierrordiv-invisible')}>
            Tiles unpopulated due to API erorr. Please try again after some time.
            </span>
          </div>

          <NewFeatures />
          <SegmentStory/>

          <div className='d-flex justify-content-center iphone-divs'>
            <div className='iphone-info-div'>
              <div className='proud-title'>Proud of my trophies.</div>
              <img className='iphone-1' src={iphone} width="300"></img>
              <video className='iphone-1-video' src={trophy_video} loop={true} autoPlay={true} playsInline></video>
            </div>
            <div className='iphone-info-div-2'>
              <div className='dnf-title'>More, of my DNFs.</div>
              <img className='iphone-2' src={iphone} width="300"></img>
              <video className='iphone-2-video' src={dnf_video} loop={true} autoPlay={true} playsInline></video>
            </div>
            <div className='iphone-info-div-3'>
              <div className='segments-title' ><b>Boulder</b>, incoming.</div>
              <img className='iphone-3' src={iphone} width="300"></img>
              <video className='iphone-3-video' src={segments_video} loop={true} autoPlay={true} playsInline></video>
            </div>
          </div>
          <div className='strava_wall_div'
          onMouseEnter={handleScrollRed}
          onMouseLeave ={handleScrollGreen}
          >
        
      <Discussion noBackground={true}/>
                    
          </div>
          {/* <img className='signal_image' src={signal}></img> */}

          <Signal path={6} bottomSignalColor={bottomSignalColor} />
          <Sidebar path={6} />
          <Navbar path={6} />
        
        </div>
        
        <div className='bodycontent_mystrava-responsive-parent'>
          <div className='d-flex justify-content-center bodycontent_mystrava-responsive'>

            <div>
              <div className='information-div-profile d-flex'>
                <div className='information-div-image-parent'>
                  <img className={'information-div-profile-athlete-image' + (isLoaderActive ? ' data-invisble' : ' ')} src={athleteProfileData['profile']}></img>
                  <img className={'information-div-profile-athlete-image-badge' + (isLoaderActive ? ' data-invisble' : ' ')} src={premiumBadge}></img>
                </div>
                <div className='information-div-profile-text-container'>
                  <div><b>{athleteProfileData['firstname'] + ' ' + athleteProfileData['lastname']}</b></div>
                  <div className='information-div-profile-text-location' >{athleteProfileData['city'] + ', ' + athleteProfileData['state']}</div>
                  <div className='information-div-profile-text-bio' >{athleteProfileData['bio']}</div>

                </div>
              </div>
              <div className='information-div-weekly-summary'>
                <span className='title-total-activities'>WEEKLY SUMMARY</span>
                {/* <div className={'loader'  + (isLoaderActive ? '' : 'loader-invisible')} ></div> */}

                {/* <img className="i1" src={weekly_summary_hand} /> */}
                <div className='activity-summary-button-suite'>
                  <button className={'activity-summary-button' + (userSelectedActivityType == 'Run' ? ' orange_activity' : ' ')} onClick={() => { userSelectedActivityType = 'Run'; setState({}); }}><img className="activity_icon_inbutton run" src={runimage} />Run</button>
                  <button className={'activity-summary-button' + (userSelectedActivityType == 'Ride' ? ' orange_activity' : ' ')} onClick={() => { userSelectedActivityType = 'Ride'; setState({}); }}><img className=" activity_icon_inbutton bike" src={bikeimage} />Ride</button>
                  {/* <button className={'activity-summary-button' + (userSelectedActivityType == 'Run' ? ' orange_activity' : ' ')} onClick={userSelectedActivityType = 'Swim'}><img className=" activity_icon swim" src={swimimage} />Swim</button> */}
                  <button className={'activity-summary-button' + (userSelectedActivityType == 'WeightTraining' ? ' orange_activity' : ' ')} onClick={() => { userSelectedActivityType = 'WeightTraining'; setState({}); }}>
                    <img className=" activity_icon_inbutton weighttraining" src={weightimage} />Weight Training</button>
                </div>
                <SummaryPlot mileageData={mileageData} userSelectedActivityType={userSelectedActivityType} />
              </div>
              <div className='information-div-center-row-responsive latest-activities-responsive'>
                <span className='title-total-activities'>LATEST ACTIVITY</span>
                <div className={'loader' + (isLoaderActive ? '' : 'loader-invisible')} ></div>

                {/* <img className="i3" src={latest_activity_hand} /> */}
                <div>
                  <div className='information-div-child-lots'>
                    <div><b>{isLoaderActive ? '' : latestActivity.name}</b></div>
                    <div>{isLoaderActive ? '' : latestActivity.description}</div>
                    <div>{isLoaderActive ? '' : convertSeconds(latestActivity.elapsed_time)} </div>
                    <div>{isLoaderActive ? '' : parseFloat(latestActivity.distance / 1000).toFixed(1) + " km"} </div>
                    {/* <div>{console.log(latestActivityPolyline)}</div> */}
                    <div className='d-flex'>
                      <div><i>{isLoaderActive ? '' : latestActivity.sport_type}</i>
                        {isLoaderActive ? '' : latestActivity.sport_type == 'Run' ? (<img className=" activity_icon run" src={runimage} />) :
                          latestActivity.sport_type == 'Ride' ? (<img className=" activity_icon bike" src={bikeimage} />) :
                            latestActivity.sport_type == 'Swim' ? (<img className=" activity_icon swim" src={swimimage} />) :
                              latestActivity.sport_type == 'WeightTraining' ? (<img className=" activity_icon weighttraining" src={weightimage} />) :
                                <span></span>
                        }
                      </div>
                      <div className='information-div-kudos-count'>
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" data-testid="unfilled_kudos"><path d="M15.243 7.182a1.907 1.907 0 00-.532-1.423 2.069 2.069 0 00-1.493-.641H9.863l.454-1.812A2.426 2.426 0 008.064.514h-.513l-.718 2.807L4.97 6.915.412 9.34l2.472 6.424 4.278-2.28h4.785a2.142 2.142 0 002.127-1.976l.084-1.177a1.962 1.962 0 00.712-2.097 1.93 1.93 0 00.373-1.052zM1.664 9.807l2.06-1.1 1.748 4.542-2.061 1.1-1.747-4.542zm12.289-2.038l-.268.254.165.331a.942.942 0 01-.044.903.965.965 0 01-.369.352l-.237.131-.122 1.7a1.123 1.123 0 01-1.129 1.049H6.914l-.552.295-1.748-4.547 1.1-.586 2.033-3.92.567-2.166a1.427 1.427 0 011.032 1.371c0 .071 0 .139-.007.167l-.758 3.016h4.64a1.059 1.059 0 01.764.328.917.917 0 01.26.683.942.942 0 01-.292.639z" fill=""></path></svg>
                        {latestActivity.kudos_count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='information-div-center-row-responsive latest-activities-responsive'>
                <span className='title-total-activities'>STATS</span>
                {/* <div className={'loader'  + (isLoaderActive ? '' : 'loader-invisible')} ></div> */}
                <div className="d-flex justify-content-around">
                  <div className='c1-parent'>
                    <div className="circle-1">{isLoaderActive ? '' : totalActivitiesTillDate}</div>
                    {/* <div className="circle-1-title">Activites</div> */}
                  </div>
                  <div className='c2-parent'>
                    <div className="circle-2">{isLoaderActive ? '' : Math.round(totalHoursTillDate / 3600)}</div>
                    {/* <div className="circle-2-title">Hours</div> */}
                  </div>
                  <div className='c3-parent'>
                    <div className="circle-3">{isLoaderActive ? '' : userKudosRecievedCount}</div>
                    {/* <div className="circle-3-title">Kudos</div>  */}
                  </div>
                </div>
                <div className="d-flex justify-content-around circle-titles">
                  <div className=''>
                    <div className="">Activites</div>
                  </div>
                  <div className=''>
                    <div className="">Hours</div>
                  </div>
                  <div className=''>
                    <div className="">Kudos</div>
                  </div>
                </div>
              </div>




            </div>

          </div>
          <Navbar path={6} />
        </div>
      </div>
    </div>

  );
}

export default Mystrava;
