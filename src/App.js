import Input from "./Input"
import Textarea from "./Textarea"
import Button from "./Button"
import Select from "./Select"

import { fetchData } from './fetchData'

export class App {

    constructor() {
        this.container = null
        this.requestBody = '{ "task": "prepare to run" }'
        this.responseBody = '{}'
        this.URL = ''
        this.method = 'GET'

        this.isLoading = false

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

    onSelectMethodChange(newMethod) {
        this.method = newMethod
        this.render()
    }

    onSubmitButtonClick() {
        return fetchData(
            this.URL,
            {
                method: this.method,
                body: this.method === 'GET' ? undefined : this.requestBody,
                responseTransformFn: 'text',
                startCallback: () => {
                    this.isLoading = true
                    this.render()
                },
                successCallback: (responseBody) => this.responseBody = responseBody,
                catchCallback: (error) => this.responseBody = error.message,
                endCallback: () => { 
                    this.isLoading = false
                    this.render()
                }
            }
        )
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

        const selectButton = new Select(
            [
                { label: 'Method: GET', value: 'GET' },
                { label: 'Method: PUT', value: 'PUT' },
                { label: 'Method: POST', value: 'POST' },
                { label: 'Method: PATCH', value: 'PATCH' },
                { label: 'Method: DELETE', value: 'DELETE' }
            ],
            this.method,
            this.onSelectMethodChange.bind(this)
        )

        const submitButton = new Button(
            'Send',
            () => console.log(this.URL)
        )

        this.container.appendChild(inputElement.render())
        this.container.appendChild(textareaRequestBody.render())
        this.container.appendChild(selectButton.render())
        this.container.appendChild(submitButton.render())
        this.container.appendChild(textareaResponseBody.render())

        return this.container
    }

}

export default App