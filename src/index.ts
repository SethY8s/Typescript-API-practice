export {}
import { onClickFunction } from "./tsModules/function"

const test = document.querySelector<HTMLButtonElement>('#test')

test?.addEventListener('click', onClickFunction)

console.log(import.meta.env.key)