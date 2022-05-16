export {}
import { onClickFunction } from "./tsModules/function"

const test = document.getElementById('test')

test?.addEventListener('click', onClickFunction)