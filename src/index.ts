export {}
import { onClickFunction, onSubmit } from "./tsModules/function"
import { fetchData } from "./tsModules/fetch"

const test = document.querySelector<HTMLButtonElement>('#test')

test?.addEventListener('click', onClickFunction)

fetchData()


const form = document.getElementById('form')

form?.addEventListener('submit', onSubmit)