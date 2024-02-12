'use client'
import moment from 'moment'
import React from 'react'
import Icon from '../Icon/icon'
import { formatUnixTimestamp, mphToKmph, mpsToKmph, titleCase, weatherIcons } from '@/service/common-service'
import { CurrentWeatherData, WeatherData } from '@/Modal/WeatherModel'
type Props = {
  weatherData: CurrentWeatherData | any
  isFahrenheit: boolean
}
const LeftCard = ({ weatherData, isFahrenheit }: Props) => {
  const dateString = moment.unix(weatherData?.dt)
  const sunriseTime = formatUnixTimestamp(weatherData?.sunrise, 'hh:mm A')
  const sunsetTime = formatUnixTimestamp(weatherData?.sunset, 'hh:mm A')
  const dayString = formatUnixTimestamp(weatherData?.dt, 'dddd')
  const timeString = dateString.format('hh:mm A')

  const weatherIcon = weatherIcons[weatherData?.weather[0]?.id] || 'sunny'
  const temperature = isFahrenheit ? `${weatherData?.temp}°F` : `${weatherData?.temp}°C`
  return (
    <div className='left-section'>
      <div className='card'>
        <div className='card-header space-between'>
          <span>{dayString}</span>
          <span>{timeString}</span>
        </div>
        <div className='card-body'>
          <div className='align-items-end'>
            <div className='align-items-center'>
              <div className='partly-cloudy-icon'>
                <span></span>
                <Icon name={weatherIcon} />
              </div>
              <span>{titleCase(weatherData?.weather[0]?.description)}</span>
            </div>
            <div className='cloudy-icon'>
              <svg width='63' height='43' viewBox='0 0 63 43' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='11.9201' cy='30.9127' r='11.2638' fill='#D9D9D9' />
                <circle cx='51.7362' cy='30.9127' r='11.2638' fill='#D9D9D9' />
                <circle cx='31.5663' cy='17.2914' r='17.2886' fill='#D9D9D9' />
                <path d='M51.6053 42.1765H12.0511L26.7202 23.5782L38.6388 19.6489H51.6053V42.1765Z' fill='#D9D9D9' />
              </svg>
            </div>
          </div>
          <div className='temperature-section space-between'>
            <h1>{temperature}</h1>
            <div className='right-cloudy-icon'></div>
          </div>
          <div className='align-items-center items-list'>
            <div className='items'>
              <p>Pressure</p>
              <span>{weatherData?.pressure}mb</span>
            </div>
            <div className='items'>
              <p>Humidity</p>
              <span>{weatherData?.humidity}%</span>
            </div>
            <div className='items'>
              <p>Wind Speed</p>
              <span>{isFahrenheit ? mphToKmph(weatherData?.wind_speed) : mpsToKmph(weatherData?.wind_speed)}km</span>
            </div>
          </div>
          <div className='inner-card'>
            <div className='align-items-center'>
              <div className='icon'>
                <Icon name='left_card_sunrise' />
              </div>
              <span>Sunrise</span>
            </div>
            <div className='time-section'>{sunriseTime}</div>
          </div>
          <div className='inner-card'>
            <div className='align-items-center'>
              <div className='icon'>
                <Icon name='left_card_sunset' />
              </div>
              <span>Sunset</span>
            </div>
            <div className='time-section'>{sunsetTime}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftCard
