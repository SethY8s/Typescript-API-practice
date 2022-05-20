export { fetchData };
import { apiKey } from './apikey';

// const fetchDatatest = async () => {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`
//   )
//     .then((data) => data.json())
//     .then((el) => console.log(el));
// }; These two functions do the same thing

const fetchData = async (input:string) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=imperial`)
  let newData = await data.json()
  console.log(newData.main.temp)
  document.getElementById('insert').innerHTML = newData.main.temp
};
