export class Select {

    constructor(optionsArr, value, onChange) {
        this.options = optionsArr
        this.value = value
        this.onChange = onChange
    }

    render() {
        const select = document.createElement('select')

        select.style.width = '100%'
        select.style.height = '30px'
        select.style.marginBottom = '5px'

        this.options.forEach(({ label, value }) => {
            
            const selectOption = document.createElement('option')

            selectOption.innerText = label
            selectOption.value = value

            select.appendChild(selectOption)
        })

        select.value = this.value

        select.addEventListener(
            'input',
            (e) => this.onChange(e.target.value)
        )

        return select
    }
}

export default Select