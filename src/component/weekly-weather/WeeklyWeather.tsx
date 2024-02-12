import { DailyWeatherData } from '@/Modal/WeatherModel'
import moment from 'moment'
import React from 'react'
import Icon from '../Icon/icon'
import { formatUnixTimestamp, weatherIcons } from '@/service/common-service'

type Props = {
  weatherData: DailyWeatherData[] | any
  isFahrenheit: boolean
}

const WeeklyWeather = ({ weatherData, isFahrenheit }: Props) => {
  return (
    <div className='weekly-weather-card-section d-flex mb-30'>
      {weatherData &&
        weatherData.length > 0 &&
        weatherData.map((data, index) => {
          const dateString = moment.unix(data?.dt)
          const dayString = formatUnixTimestamp(data?.dt, 'dddd')

          const timeString = dateString.format('hh:mm A')
          let timeOfDay

          // Determine if it's morning, evening, or night based on the time
          if (timeString >= '06:00' && timeString < '12:00') {
            timeOfDay = 'Morning'
          } else if (timeString >= '12:00' && timeString < '18:00') {
            timeOfDay = 'Afternoon/Evening'
          } else {
            timeOfDay = 'Night'
          }

          const weatherIcon = weatherIcons[data.weather[0]?.id] || 'sunny'
          return (
            <>
              <div className='weekly-weather-card'>
                <div className='week-day'>{dayString}</div>
                <div className='icon'>
                  <Icon name={weatherIcon} />
                </div>
                <div className='temperature'>
                  {' '}
                  {timeOfDay === 'Morning'
                    ? data.temp.morn.toFixed(0)
                    : timeOfDay === 'Afternoon/Evening'
                      ? data.temp.eve.toFixed(0)
                      : data.temp.night.toFixed(0)}
                  {isFahrenheit ? '°F' : '°C'}
                </div>
              </div>
            </>
          )
        })}
    </div>
  )
}

export default WeeklyWeather
