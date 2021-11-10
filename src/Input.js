export class Input {

    constructor(value, onChange, caretPosition, placeholder) {
        this.value = value
        this.onChange = onChange
        this.caretPosition = caretPosition
        this.placeholder = placeholder
    }

    render() {
        const input = document.createElement('input')
        input.style.width = '100%'
        input.style.boxSizing = 'border-box'
        input.style.marginBottom = '5px'
        input.style.border = '1px solid rgb(0,0,1)'
        input.style.borderRadius = '4px'
        input.style.minHeight = '40px'

        input.value = this.value
        input.placeholder = this.placeholder

        input.addEventListener(
            'input',
            (e) => this.onChange(
                e.target.value,
                e.target.selectionStart
            )
        )

        if (this.caretPosition !== null) {
            queueMicrotask(() => {
                input.focus()
                input.selectionStart = this.caretPosition
                input.selectionEnd = this.caretPosition
            }
            )
        }


        return input
    }

}

export default Input