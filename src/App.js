import Input from "./Input"
import Textarea from "./Textarea"

export class App {

    constructor() {
        this.container = null
        this.requestBody = '{ "task": "prepare to run" }'
        this.responseBody = '{}'
        this.URL = ''
    }

    onRequestBodyChange(newValue) {
        this.requestBody = newValue
        this.render()
    }

    onInputElementChange(newURL) {
        this.URL = newURL
        this.render()
    }

    render() {
        if (!this.container) {
            this.container = document.createElement('div')
            this.container.style.width = '100%'
            this.container.style.margin = '0 auto'
        }

        this.container.innerHTML = ''


        const inputElement = new Input(
            this.URL,
            this.onInputElementChange.bind(this),
            'Request URL'
        )

        const textareaRequestBody = new Textarea(
            this.requestBody,
            (newValue) => this.onRequestBodyChange(newValue),
            false
        )

        const textareaResponseBody = new Textarea(
            this.responseBody,
            () => { },
            true
        )

        this.container.appendChild(inputElement.render())
        this.container.appendChild(textareaRequestBody.render())
        this.container.appendChild(textareaResponseBody.render())

        return this.container
    }

}

export default App