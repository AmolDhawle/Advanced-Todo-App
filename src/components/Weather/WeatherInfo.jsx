import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/slices/weather/weatherSlice';

const WeatherInfo = ({ location }) => {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather.data);
  const status = useSelector(state => state.weather.status);
  const error = useSelector(state => state.weather.error);

  useEffect(() => {
    if (location) {
      dispatch(fetchWeather(location));
    }
  }, [location, dispatch]);

  if (!location) return null;
  if (status === 'loading') return <p>Loading weather...</p>;
  if (error) return <p>Error fetching weather: {error}</p>;

  return (
    <div>
      {weather ? (
        <div>
          <p>Temp: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherInfo;
