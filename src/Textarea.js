export class Textarea {

    constructor(value, onChange, readonly) {
        this.value = value
        this.onChange = onChange
        this.readonly = readonly
    }

    render() {
        const div = document.createElement('div')
        div.style.margin = '0 auto'

        const textarea = document.createElement('textarea')
        textarea.style.width = '100%'
        textarea.style.minHeight = '200px'
        textarea.style.boxSizing = 'border-box'
        textarea.style.border = '1px solid rgb(0,0,1)'
        textarea.style.borderRadius = '4px'

        let error = null
        try {
            textarea.value = JSON.stringify(JSON.parse(this.value), null, 4)
        } catch (err) {
            textarea.value = this.value
            error = err
        }

        if (this.readonly = true) textarea.setAttribute('readonly', true)

        textarea.addEventListener(
            'input',
            (e) => this.onChange(e.target.value)
        )

        div.appendChild(textarea)

        return div
    }

}

export default Textarea