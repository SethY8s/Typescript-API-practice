export { fetchData };
import { apiKey } from './apikey';

// const fetchDatatest = async () => {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`
//   )
//     .then((data) => data.json())
//     .then((el) => console.log(el));
// }; These two functions do the same thing

const fetchData = async (input: string | null) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiKey}&units=imperial`
  );

  let TempAndCords = await data.json();

  const threeDayData : string[] = [];

  for (let i = 5; i < TempAndCords.list.length; i = i + 8) {
    threeDayData.push(TempAndCords.list[i].main.temp);
  }

  console.log(threeDayData);

  console.log(TempAndCords);

 const insert = document.getElementById('insert')

 if(insert !== null){
  insert.innerHTML = `${Math.ceil(
    TempAndCords.list[0].main.temp
  )} F`;
 }

const fiveDayInsert = document.getElementById('5day-insert')

if(fiveDayInsert !== null){
  fiveDayInsert.innerHTML = `${threeDayData.map(
    (el) => `<p>${el}</p>`
  )}`;
}
};
