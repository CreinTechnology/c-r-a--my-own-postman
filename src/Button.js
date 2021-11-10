export class Button {

    constructor(label, onClick) {
        this.label = label
        this.onClick = onClick
    }

    render() {
        const button = document.createElement('button')
        button.style.width = '100%'
        button.style.borderRadius = '4px'
        button.style.border = '1px solid rgb(0,0,1)'
        button.style.backgroundColor = 'rgba(0,0,0,0.05)'
        button.style.outline = 'none'
        button.style.marginBottom = '5px'
        button.style.minHeight = '20px'


        button.innerText = this.label

        button.addEventListener(
            'click',
            () => this.onClick()
        )

        return button
    }

}

export default Button