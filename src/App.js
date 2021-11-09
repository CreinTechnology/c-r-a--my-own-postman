import Textarea from "./Textarea"

export class App {

    constructor() { }

    render() {
        const div = document.createElement('div')

        const textElement = new Textarea(
            'Is it works?',
            () => { }
        )

        div.appendChild(textElement.render())

        return div
    }

}

export default App