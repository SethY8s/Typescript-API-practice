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
    `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiKey}&units=imperial`
  );

  let TempAndCords = await data.json();

  const threeDayData = [];
  
  for(let i = 5; i < TempAndCords.list.length; i = i + 8){
    threeDayData.push(TempAndCords.list[i].main.temp)
  }

  console.log(threeDayData)

  console.log(TempAndCords);
  document.getElementById('insert').innerHTML = `${Math.ceil(TempAndCords.list[0].main.temp)} F`;
};
