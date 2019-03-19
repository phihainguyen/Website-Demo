/*var person = {
	name:"brad",
	age:35,
	address:{
		street:"5 main st",
		city:"Boston"
	},
children:["Brianna", "Jason"]

}
//person =JSON.stringify(person);
//person =JSON.parse(person);
for(let i=0; i<person.children.length; i++){
console.log(person.children[i]);
};

var people=[
{
	name:"Brad",
	age:40
},
	{
		name:"Dan",
	age:22
	},
	{
		name:"Jason",
	age:29
	}
];
var output='';

for(let i = 0; i<people.length; i++){
//console.log(people[i])

output +="<li>"+people[i].age+", "+people[i].name+"</li>";
}
$('#people').append($('li')).append(output);
*/








$(".btn").click(function(){

	getWeather();

});

function getWeather(){
	var zipCode= $('#postal-code').val();
	console.log(zipCode)
	$.ajax({

		url: "https://api.openweathermap.org/data/2.5/forecast?zip=" + zipCode + ",us&appid=8caea81085fc66df0fb0c7d61c6772b8",
		method:'GET',
	}).then(function(response){
		console.log(response)
for(let i=0; i<response.list.length; i+=3){
		var cloud = response.list[i].clouds;
		console.log(cloud);

		var weatherDescription = response.list[i].weather[0];
		console.log(weatherDescription)

		var temperature = response.list[i].main;
		console.log(temperature)

		var date = response.list[i].dt_txt;
		console.log(date);
	}
	})
var SpotifyWebApi = require('../');

/**
 * This example refreshes an access token. Refreshing access tokens is only possible access tokens received using the
 * Authorization Code flow, documented here: https://developer.spotify.com/spotify-web-api/authorization-guide/#authorization_code_flow
 */

/* Retrieve a code as documented here:
 * https://developer.spotify.com/spotify-web-api/authorization-guide/#authorization_code_flow
 *
 * Codes are given for a set of scopes. For this example, the scopes are user-read-private and user-read-email.
 * Scopes are documented here:
 * https://developer.spotify.com/spotify-web-api/using-scopes/
 */
var authorizationCode =
  'AQAgjS78s64u1axMCBCRA0cViW_ZDDU0pbgENJ_-WpZr3cEO7V5O-JELcEPU6pGLPp08SfO3dnHmu6XJikKqrU8LX9W6J11NyoaetrXtZFW-Y58UGeV69tuyybcNUS2u6eyup1EgzbTEx4LqrP_eCHsc9xHJ0JUzEhi7xcqzQG70roE4WKM_YrlDZO-e7GDRMqunS9RMoSwF_ov-gOMpvy9OMb7O58nZoc3LSEdEwoZPCLU4N4TTJ-IF6YsQRhQkEOJK';

/**
 * Set the credentials given on Spotify's My Applications page.
 * https://developer.spotify.com/my-applications
 */
var spotifyApi = new SpotifyWebApi({
  clientId: '<insert client id>',
  clientSecret: '<insert client secret>',
  redirectUri: '<insert redirect URI>'
});

// When our access token will expire
var tokenExpirationEpoch;

// First retrieve an access token
spotifyApi.authorizationCodeGrant(authorizationCode).then(
  function(data) {
    // Set the access token and refresh token
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);

    // Save the amount of seconds until the access token expired
    tokenExpirationEpoch =
      new Date().getTime() / 1000 + data.body['expires_in'];
    console.log(
      'Retrieved token. It expires in ' +
        Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
        ' seconds!'
    );
  },
  function(err) {
    console.log(
      'Something went wrong when retrieving the access token!',
      err.message
    );
  }
);

// Continually print out the time left until the token expires..
var numberOfTimesUpdated = 0;

setInterval(function() {
  console.log(
    'Time left: ' +
      Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
      ' seconds left!'
  );

  // OK, we need to refresh the token. Stop printing and refresh.
  if (++numberOfTimesUpdated > 5) {
    clearInterval(this);

    // Refresh token and print the new time to expiration.
    spotifyApi.refreshAccessToken().then(
      function(data) {
        tokenExpirationEpoch =
          new Date().getTime() / 1000 + data.body['expires_in'];
        console.log(
          'Refreshed token. It now expires in ' +
            Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
            ' seconds!'
        );
      },
      function(err) {
        console.log('Could not refresh the token!', err.message);
      }
    );
  }
}, 1000);




















}
