const board = document.querySelector('#board')
const colors = ['#DC143C','#00FF00' ,'#FFFF00','#00FFFF','#FF00FF','#1E90FF','#00FA9A','#0000FF']
const SQUARES_NUMBER = 1019

for (let i = 0; i < SQUARES_NUMBER; i += 1){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square))
    
    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}