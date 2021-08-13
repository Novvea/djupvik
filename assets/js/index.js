import {getForecastData} from './getForecast.js'

let WEATHER = document.getElementById('weather')

async function getTemperature() {
  let weatherData = await getForecastData()
  return weatherData
}

async function showTemperature() {
  let tempObject = await getTemperature() 
  let tempNow = await tempObject.timeSeries[0].parameters[10].values[0]
  let tempInOneHour = await tempObject.timeSeries[1].parameters[10].values[0]
    await WEATHER.append(`Temperaturen i Djupvikshamn kommer under denna timme att vara ${tempNow} grader och under nästa timme att vara ${tempInOneHour} grader`)
  }

 showTemperature()


