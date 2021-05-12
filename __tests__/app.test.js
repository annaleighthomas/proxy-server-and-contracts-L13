import locationData from '../data/location';
import weatherData from '../data/weather';
import { formatLocation, formatWeather } from '../lib/munge-utils';


describe('API Data Munging', () => {

  const expectedLocation = [
    {
      formatted_query: 'Portland, Multnomah County, Oregon, USA',
      latitude: '45.5202471',
      longitude: '-122.6741949'
    },
    {
      formatted_query: 'Portland, Cumberland County, Maine, USA',
      latitude: '43.6610277',
      longitude: '-70.2548596'
    },
    {
      formatted_query: 'Portland, San Patricio County, Texas, USA',
      latitude: '27.8768086',
      longitude: '-97.3233874'
    }
  ];
    
  test('munges location data', async () => {
    
    const output = formatLocation(locationData);

    expect(output).toEqual(expectedLocation);

  });

  const expectedWeather = [

    {
      forecast: 'Broken clouds',
      time: '2021-05-12'
    },
    {
      forecast: 'Few clouds',
      time: '2021-05-13'
    },
    {
      forecast: 'Moderate rain',
      time: '2021-05-14'
    }
  ];

  test('munges weather data', async () => {

    const output = formatWeather(weatherData);

    expect(output).toEqual(expectedWeather);
  });

});
