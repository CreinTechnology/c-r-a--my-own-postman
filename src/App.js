import Textarea from "./Textarea"

export class App {

    constructor() { 
        this.container = null
        this.textElementValue = '{"task": "prepare to run"}'
    }

    onTextElementChange(newValue){
        this.textElementValue = newValue
        this.render()
    }

    render() {
        this.container = document.createElement('div')

        this.container.innerHTML = ''

        const textElement = new Textarea(
            this.textElementValue,
            (newValue) => this.onTextElementChange(newValue)
        )

        this.container.appendChild(textElement.render())

        return this.container
    }

}

export default App