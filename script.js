
let hours = document.querySelector('.hour')
let minits = document.querySelector('.minit')
let seconds = document.querySelector('.second')
let miliseconds = document.querySelector('.milisecond')
let res = document.querySelector('.res')

let start = document.querySelector('.button')
let pausa = document.querySelector('.pausa')
let stoped = document.querySelector('.stop')
let reset =  document.querySelector('.reset')

let hour = 00
let minit = 00
let second = 00
let mili = 00
let interval

start.addEventListener('click',()=>{
    clearInterval(interval)
    interval = setInterval(startTimer,10)
})

pausa.addEventListener('click',()=>{
    clearInterval(interval)
})

stoped.addEventListener('click',()=>{
    clearInterval(interval)
    clear()
    res.innerHTML = ''
})

reset.addEventListener('click',()=>{
    clearInterval(interval)
    let block = document.createElement('div')
    block.innerHTML = `Resuit ${hour}:${minit}:${second}:${mili}`
    res.append(block)
    clear()
    clearInterval(interval)
    interval = setInterval(startTimer,10)
})



function clear(){
    hour = 00
    minit = 00
    second = 00
    mili = 00
    hours .textContent = '00'
    minits.textContent = '00'  
    seconds.textContent = '00' 
    miliseconds.textContent = '00'
}

function startTimer(){
    mili++
    if(mili<9){
        miliseconds.innerHTML = '0'+mili
    }
    if(mili>9){
        miliseconds.innerHTML = mili
    }
    if(mili>99){
        second++
        seconds.innerHTML = '0'+second
        mili = 0
        miliseconds.innerHTML = '0'+mili
    }

    if(second<9){
        seconds.innerHTML = '0'+second
    }
    if(second>9){
        seconds.innerHTML = second
    }
    if(second>59){
        minit++
        minits.innerHTML = '0'+minit
        second = 0
        seconds.innerHTML = '0'+second
    }
   //nuyn@ minitov u hour-ov
}
