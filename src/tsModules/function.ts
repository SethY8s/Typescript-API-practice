export { onClickFunction, onSubmit }

const thing = document.getElementById('see') as HTMLHeadElement

const onClickFunction = () => {
    thing.style.color="blue";

}

const onSubmit = (e:SubmitEvent) => {
    e.preventDefault()
    const input = (document.getElementById('input') as HTMLInputElement).value
    console.log(input)
}