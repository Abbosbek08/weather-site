APP_ID='fd938bffb49fd87a4f693ebfb67e46a0'

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/weather?q=Jizzax&lang=Uzbek-uz&mode=JSON",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "f815d5e539msh45befe064a501a1p1bd302jsne1ec3fd1e49d"
	}
};

$.ajax(settings).done(function (response) {
  console.log(response)
	$('#cn').html(response.name)
  $('#wth').html(response.weather[0].main)
  $('#desc').html(response.weather[0].description)
});

function getWeather(){
  vil=$('#cityName').val()
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://community-open-weather-map.p.rapidapi.com/weather?q=${vil}&lang=Uzbek-uz&mode=JSON`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "f815d5e539msh45befe064a501a1p1bd302jsne1ec3fd1e49d"
    }
  };
  
  $.ajax(settings).done(function (response) {
    $('#cn').html(response.name)
  $('#wth').html(response.weather[0].main)
  $('#desc').html(response.weather[0].description)
  });
}







