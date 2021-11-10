import Input from "./Input"
import Textarea from "./Textarea"

export class App {

    constructor() { 
        this.container = null
        this.textElementValue = '{"task": "prepare to run"}'
        this.URL = ''
    }

    onTextElementChange(newValue){
        this.textElementValue = newValue
        this.render()
    }

    onInputElementChange(newURL){
        this.URL = newURL
        this.render()
    }

    render() {
        this.container = document.createElement('div')
        this.container.style.width = '100%'
        this.container.style.margin = '0 auto'

        this.container.innerHTML = ''


        const inputElement = new Input(
            this.URL,
            this.onInputElementChange.bind(this),
            'Request URL'
        )

        const textElement = new Textarea(
            this.textElementValue,
            (newValue) => this.onTextElementChange(newValue)
        )

        this.container.appendChild(inputElement.render())
        this.container.appendChild(textElement.render())

        return this.container
    }

}

export default App