export class Textarea{

    constructor(value, onChange){
        this.value = value
        this.onChange = onChange
    }

    render(){
        const div = document.createElement('div')
        const textarea = document.createElement('textarea')


        textarea.style.border = '1px solid rgb(0,0,0)'

        div.appendChild(textarea)

        return div
    }

}

export default Textarea