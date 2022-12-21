const cont = document.querySelector('.container');
const sizeButton = document.querySelector('.size-button');
const clearButton = document.querySelector('.clear-button');

sizeButton.addEventListener('click', ()=> {
    cont.innerHTML = '' //to clear teh previous grid

    let numberOfSquares = prompt("How many squares do you want on each side?") //line 7-11 to set the container size
    numOfWidth = (numberOfSquares * 100) / 2
    console.log(numberOfSquares)
    numOfWidth = numOfWidth.toString()+"px"
    cont.style.width = numOfWidth

    for(let i = 0; i < numberOfSquares*numberOfSquares; i++){    //line 13-17 to create the div blocks
        const content = document.createElement('div');
        content.classList.add('.box')
        content.addEventListener('mouseover', () => {
            content.setAttribute('style', 'background: black;')
        })
        cont.appendChild(content)
    }
})

clearButton.addEventListener('click', () => {
    cont_list = document.querySelectorAll('.container');
    for(var i = 0; i < cont_list.length; i++){
        cont_list[i].style.background = 'blue'
    }
})
