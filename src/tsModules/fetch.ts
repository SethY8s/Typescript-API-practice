export { fetchData };
import { apiKey } from './apikey';

const fetchData = async () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`
  )
    .then((data) => data.json())
    .then((el) => console.log(el));
};
