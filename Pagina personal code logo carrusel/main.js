const container = document.querySelector('.fcontainer')
const colors = ['#95E5AC', '#23D1CD', '#0D6A76', '#063A51']

const figures = () => {
    for(let i = 0; i <= 50; i++){
        let figure = document.createElement('span')
        let select = Math.round(colors.length * Math.random())

        figure.style.top = innerHeight * Math.random() + 'px'
        figure.style.left = innerWidth * Math.random() + 'px'
        figure.style.background = colors[select >= colors.length ? select - 1 : select]

        container.appendChild(figure)

        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px'
            figure.style.left = innerWidth * Math.random() + 'px'
        }, 3000)
    }
}

figures()







