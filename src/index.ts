export {}
import { onClickFunction } from "./tsModules/function"
import { fetchData } from "./tsModules/fetch"

const test = document.querySelector<HTMLButtonElement>('#test')

test?.addEventListener('click', onClickFunction)

fetchData()
