export { onClickFunction, onSubmit };
import { fetchData } from './fetch';

const thing = document.getElementById('see') as HTMLHeadElement;

const onClickFunction = () => {
  thing.style.color = 'blue';
};

const onSubmit = async (e: SubmitEvent) => {
  e.preventDefault();
  const input = (document.getElementById('input') as HTMLInputElement).value;
  if (input === null) {
      fetchData('new york')
      return
  }
  console.log(input);

  fetchData(input);
};
