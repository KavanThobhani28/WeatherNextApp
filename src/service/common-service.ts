'use client';

import moment from 'moment';

export function formatUnixTimestamp(unixTimestamp, format) {
    const momentObj = moment.unix(unixTimestamp);
    return momentObj.format(format);
  }
  

export function titleCase(str) {
  return str
    ?.toLowerCase()
    ?.split(' ')
    ?.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    ?.join(' ');
}

// Convert miles per hour to kilometers per hour
export function mphToKmph(mph) {
    return (mph * 1.60934).toFixed(2);
  }
  
  // Convert meters per second to kilometers per hour
  export function mpsToKmph(mps) {
    return (mps * 3.6).toFixed(2);
  }
  

export const weatherIcons = {
    801: 'cloudy',
    802: 'cloudy',
    803: 'cloudy',
    804: 'cloudy',
    800: 'clear',
    600: 'rain',
    601: 'rain',
    602: 'rain',
    611: 'rain',
    612: 'rain',
    613: 'rain',
    615: 'rain',
    616: 'rain',
    620: 'rain',
    621: 'rain',
    622: 'rain',
    500: 'heavy_rain_strom',
    501: 'heavy_rain_strom',
    502: 'heavy_rain_strom',
    503: 'heavy_rain_strom',
    504: 'heavy_rain_strom',
    511: 'heavy_rain_strom',
    520: 'heavy_rain_strom',
    521: 'heavy_rain_strom',
    522: 'heavy_rain_strom',
    531: 'heavy_rain_strom',
    200: 'thunder',
    201: 'thunder',
    202: 'thunder',
    210: 'thunder',
    211: 'thunder',
    212: 'thunder',
    221: 'thunder',
    230: 'thunder',
    231: 'thunder',
    232: 'thunder',
    300: 'rain',
    302: 'rain',
    310: 'rain',
    311: 'rain',
    312: 'rain',
    313: 'rain',
    314: 'rain',
    321: 'rain',
  };