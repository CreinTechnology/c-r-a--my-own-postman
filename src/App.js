import Input from "./Input"
import Textarea from "./Textarea"
import Button from "./Button"

export class App {

    constructor() {
        this.container = null
        this.requestBody = '{ "task": "prepare to run" }'
        this.responseBody = '{}'
        this.URL = ''

        this.caretPositionURL = 0
        this.caretPositionRequestBody = null
    }

    onRequestBodyChange(newValue, caretPosition) {
        this.requestBody = newValue
        this.caretPositionURL = null
        this.caretPositionRequestBody = caretPosition
        this.render()
    }

    onInputElementChange(newURL, caretPosition) {
        this.URL = newURL
        this.caretPositionURL = caretPosition
        this.caretPositionRequestBody = null
        this.render()
    }

    onSubmitButtonClick(){}

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
            this.caretPositionURL,
            'Request URL'
        )

        const textareaRequestBody = new Textarea(
            this.requestBody,
            (newValue, caretPosition) => this.onRequestBodyChange(newValue, caretPosition),
            false,
            this.caretPositionRequestBody
        )

        const textareaResponseBody = new Textarea(
            this.responseBody,
            () => { },
            true
        )

        const submitButton = new Button(
            'Send',
            ()=>console.log(this.URL)
        )

        this.container.appendChild(inputElement.render())
        this.container.appendChild(textareaRequestBody.render())
        this.container.appendChild(submitButton.render())
        this.container.appendChild(textareaResponseBody.render())

        return this.container
    }

}

export default App