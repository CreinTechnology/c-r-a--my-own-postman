export class Message{

    constructor(text){
        this.text = text 
    }

    render(){

        const div = document.createElement('div')

        div.innerText = this.text

        div.style.fontFamily = 'sans-serif'
        div.style.padding = '4px 0'

        return div

    }

}
export default Message