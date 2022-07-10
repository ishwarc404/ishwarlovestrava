var accessToken = "597e89ece16a36c9021de4aca8a10b46085e5929"
var id = 43290018; 


fetch("https://www.strava.com/api/v3/athletes/43290018/stats -H 'Authorization: Bearer 597e89ece16a36c9021de4aca8a10b46085e5929'")
  .then(res => res.json())
  .then(json => {
      console.log("First user in the array:");
      console.log(json[0]);
      console.log("Name of the first user in the array:");
      console.log(json[0].name);
})