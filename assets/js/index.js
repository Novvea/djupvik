import {getForecast} from './getForecast.js'

async function showForecast() {
  let weatherData = await getForecast()
  console.log(weatherData)
}

showForecast() 



