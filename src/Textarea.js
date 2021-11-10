export class Textarea {

    constructor(value, onChange, readonly, caretPosition) {
        this.value = value
        this.onChange = onChange
        this.readonly = readonly
        this.caretPosition = caretPosition
    }

    render() {
        const div = document.createElement('div')
        const textarea = document.createElement('textarea')
        const p = document.createElement('p')

        div.style.margin = '0 auto'

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

        if (error) p.innerText = error.message

        if (this.readonly) textarea.setAttribute('readonly', true)

        textarea.addEventListener(
            'input',
            (e) => this.onChange(
                e.target.value,
                e.target.selectionStart
            )
        )

        if (!this.readonly && this.caretPosition !== null) {
            queueMicrotask(() => {
                textarea.focus()
                textarea.selectionStart = this.caretPosition
                textarea.selectionEnd = this.caretPosition
            })
        }

        div.appendChild(textarea)
        div.appendChild(p)

        return div
    }

}

export default Textarea