import clearImage from '../assets/weather/clear.png';
import cloudsImage from '../assets/weather/clouds.png';
import rainImage from '../assets/weather/rain.png';
import snowImage from '../assets/weather/snow.png';
import drizzleImage from '../assets/weather/drizzle.png';
import mistImage from '../assets/weather/mist.png';

const weatherImages = {
  Clear: clearImage,
  Clouds: cloudsImage,
  Rain: rainImage,
  Snow: snowImage,
  Drizzle: drizzleImage,
  Mist: mistImage,
};

export const getWeatherImage = (condition) => {
  return weatherImages[condition] || clearImage; // Default to clear image if condition not found
};
