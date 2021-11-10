export class Textarea {

    constructor(value, onChange) {
        this.value = value
        this.onChange = onChange
    }

    render() {
        const div = document.createElement('div')
        div.style.margin = '0 auto'

        const textarea = document.createElement('textarea')
        textarea.style.width = '100%'
        textarea.style.minHeight = '200px'
        textarea.style.boxSizing = 'border-box'

        textarea.innerText = this.value

        textarea.addEventListener(
            'input',
            (e) => this.onChange(e.target.value)
        )

        div.appendChild(textarea)

        return div
    }

}

export default Textarea