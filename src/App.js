import Input from "./Input"
import Textarea from "./Textarea"

export class App {

    constructor() { 
        this.container = null
        this.requestBody = '{ "task": "prepare to run" }'
        this.URL = ''
    }

    onRequestBodyChange(newValue){
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

        const requestBody = new Textarea(
            this.requestBody,
            (newValue) => this.onRequestBodyChange(newValue),
            false
        )

        const textElementReadOnly = new Textarea(
            this.requestBody,
            (newValue) => this.onRequestBodyChange(newValue),
            true
        )

        this.container.appendChild(inputElement.render())
        this.container.appendChild(requestBody.render())
        this.container.appendChild(textElementReadOnly.render())

        return this.container
    }

}

export default App