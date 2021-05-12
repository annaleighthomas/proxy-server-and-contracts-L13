
export function formatLocation(data) {
  return data.map(location => {
    return {
      formatted_query: location.display_name,
      latitude: location.lat,
      longitude: location.lon
    };
  });
}

export function formatWeather(data) {
  return data.data.map(weather => {
    return {
      forecast: weather.weather.description,
      time: weather.valid_date

    };
  });
}

