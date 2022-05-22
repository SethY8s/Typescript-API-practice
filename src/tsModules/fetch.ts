export { fetchData };
import { apiKey } from './apikey';

// const fetchDatatest = async () => {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`
//   )
//     .then((data) => data.json())
//     .then((el) => console.log(el));
// }; These two functions do the same thing

const fetchData = async (input: string) => {
  // const data = await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&cnt=7&units=imperial`
  // );

  // let TempAndCords = await data.json();

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=3&appid=${apiKey}&units=imperial`
  );

  let TempAndCords = await data.json();

 

  console.log(TempAndCords.list[0].main.temp)
  document.getElementById('insert').innerHTML = TempAndCords.list[0].main.temp;
};
