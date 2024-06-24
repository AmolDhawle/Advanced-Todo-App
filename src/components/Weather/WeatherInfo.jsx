import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/slices/weather/weatherSlice';
import { getWeatherImage } from '../../utils/weatherImages';

const WeatherInfo = ({ taskId, location }) => {
  const dispatch = useDispatch();
  const weatherInfo = useSelector(state => state.weather.weatherData[taskId]);
  const status = weatherInfo ? weatherInfo.status : 'idle';
  const error = weatherInfo ? weatherInfo.error : null;

  useEffect(() => {
    // Fetch weather data if location or taskId changes
    if (location && taskId && (!weatherInfo || weatherInfo.data?.name !== location)) {
      dispatch(fetchWeather({ location, taskId }));
    }
  }, [location, taskId, dispatch, weatherInfo]);

  if (!location || !taskId) return null;

  if (status === 'loading') return <p>Loading weather...</p>;
  if (error) return <p>Error fetching weather: {error}</p>;
  if (!weatherInfo || !weatherInfo.data || !weatherInfo.data.weather || !weatherInfo.data.weather[0]) {
    return <p>No weather data available</p>;
  }

  const weatherCondition = weatherInfo.data.weather[0].main;
  const weatherImage = getWeatherImage(weatherCondition);

  return (
    <div className="flex items-center">
      <img src={weatherImage} alt={weatherCondition} className="w-8 h-8 mr-2" />
      <div>
        <div>{weatherCondition}</div>
        <div>{weatherInfo.data.main.temp}°C</div>
      </div>
    </div>
  );
};

export default WeatherInfo;
