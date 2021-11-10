export class Input {

    constructor(value, onChange) {
        this.value = value
        this.onChange = onChange
    }

    render() {
        const input = document.createElement('input')
        input.style.width = '100%'
        input.style.boxSizing = 'border-box'
        input.style.marginBottom = '5px'
        input.style.border = '1px solid rgb(0,0,1)'
        input.style.borderRadius = '4px'

        input.value = this.value

        input.addEventListener(
            'input',
            (e) => this.onChange(e.target.value)
        )

        return input
    }

}

export default Input