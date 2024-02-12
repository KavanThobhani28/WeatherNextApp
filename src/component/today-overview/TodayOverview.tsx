import { formatUnixTimestamp, mphToKmph, mpsToKmph } from '@/service/common-service'
import moment from 'moment'
import React from 'react'
import Icon from '../Icon/icon'
import { CurrentWeatherData } from '@/Modal/WeatherModel'

type Props = {
  weatherData: CurrentWeatherData | any
  isFahrenheit: boolean
}

const TodayOverview = ({ weatherData, isFahrenheit }: Props) => {
  const sunriseTime = formatUnixTimestamp(weatherData?.sunrise, 'hh:mm A')
  const sunsetTime = formatUnixTimestamp(weatherData?.sunset, 'hh:mm A')

  return (
    <>
      <div className='title mb-30'>Today's Overview</div>
      <div className='card-section '>
        <div className='card'>
          <div className='card-title'>Wind Status</div>
          <div className='icon-section'>
            <span>
              <Icon name='wind_status' />
            </span>
          </div>
          <div className='space-between card-footer wind-card'>
            <span className='space-between'>
              <p>{isFahrenheit ? mphToKmph(weatherData?.wind_speed) : mpsToKmph(weatherData?.wind_speed)}</p> km/h
            </span>
            <span>{sunriseTime}</span>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>UV Index</div>
          <div className='icon-section'>
            <span>
              <Icon name='uv_index' />
            </span>
          </div>
          <div className='space-center uv-card'>
            <span className='space-between'>
              <p>{weatherData?.uvi} </p>
            </span>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>Sunrise & Sunset</div>
          <div className='icon-section'>
            <span>
              <Icon name='sunrise_set' />
            </span>
          </div>
          <div className='space-between card-footer '>
            <div className='sun-details'>
              <p>Sunrise</p>
              <span>{sunriseTime}</span>
            </div>
            <div className='sun-details'>
              <p>Sunrise</p>
              <span>{sunsetTime}</span>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>Humidity</div>
          <div className='icon-section'>
            <span className='icon-end'>
              <Icon name='humidity' />
            </span>
          </div>
          <div className='card-footer card-details'>
            <h4>{weatherData?.humidity}%</h4>
            <span>The dew point is {weatherData?.dew_point} right now.</span>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>Visibility </div>
          <div className='icon-section'>
            <span className='icon-end'>
              <Icon name='visiblity' />
            </span>
          </div>
          <div className='card-footer card-details'>
            <h4 className='align-items-center'>
              <span>{weatherData?.visibility}</span>
            </h4>
            <span>The dew point is {weatherData?.dew_point} right now.</span>
          </div>
        </div>
        <div className='card'>
          <div className='card-title'>Feels Like </div>
          <div className='icon-section'>
            <span className='icon-end'>
              <Icon name='feels_like' />
            </span>
          </div>
          <div className='card-footer card-details'>
            <h4 className='align-items-center'>
              <span>{weatherData?.feels_like}</span>
            </h4>
            <span>The dew point is {weatherData?.dew_point} right now.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodayOverview
