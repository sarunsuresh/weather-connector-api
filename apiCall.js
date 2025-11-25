const dotenv=require('dotenv')
const axios=require('axios')
dotenv.config()

const API_KEY=process.env.API_KEY
async function apiCall(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response= await axios.get(url)
    
    return{
    city: response.data.name,
    temperature: response.data.main.temp,
    feels_like: response.data.main.feels_like,
    weather: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind_speed: response.data.wind.speed,
    sunrise: response.data.sys.sunrise,
    sunset: response.data.sys.sunset
    }
}

module.exports=apiCall

