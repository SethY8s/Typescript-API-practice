export {}
import { onClickFunction, onSubmit } from "./tsModules/function"


const test = document.querySelector<HTMLButtonElement>('#test')

test?.addEventListener('click', onClickFunction)





const form = document.getElementById('form')

form?.addEventListener('submit', onSubmit)