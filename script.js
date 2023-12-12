const options ={
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '52950cb461mshc5a96626e2339f4p1c6b49jsnacf47354172d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)

	.then(response => response.json())
	.then((response) => {


	console.log(response)
	
	wind_speed2.innerHTML = response.wind_speed
	humidity2.innerHTML = response.humidity
	temp2.innerHTML = response.temp
	feels_like.innerHTML = response.feels_like
	humidity.innerHTML = response.humidity
	min_temp.innerHTML = response.min_temp
	max_temp.innerHTML = response.max_temp
	wind_speed.innerHTML = response.wind_speed
	wind_degrees.innerHTML = response.wind_degrees
	sunrise.innerHTML = response.sunrise
	sunset.innerHTML = response.sunset

	})
	.catch((err) => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
}

)
getWeather("Delhi")