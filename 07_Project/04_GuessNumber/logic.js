let target = parseInt((Math.random()*100) + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const result = document.querySelector(".resultParas")
const prev = document.querySelector(".guesses")
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector(".lowOrHi")

const p = document.createElement('p')

let numguess = 0;
let preGuesses = []
let play = true;

if(play){
    submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validguess(guess)
    
})
}
function validguess(guess){
    if(guess < 0 || isNaN(guess) || guess > 100){
        alert("Enter Number Between 1 and 100!")
    } else{
        if(numguess === 10){
            displayMessage(`You Failed to Guess ! , Actual Number was : ${target}`)
            displayGuess(guess)
            endGame()
        } else {
            displayGuess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
    preGuesses.push(guess)
    if (guess === target){
        displayMessage(`You Guessed it Right`)
        endGame()
    } else if (guess < target){
        displayMessage(`Guess is Too low`)
    }
    else if ( guess > target){
        displayMessage(`Guess is Too High`)
    }
}

function displayMessage(msg){
    lowOrHi.innerHTML = `<h2> ${msg} </h2>`
}

function displayGuess(guess){
    userInput.value = ''
    prev.innerHTML += `${guess} `
    numguess++;
    remaining.innerText = `${10-numguess}`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    play = false
    p.classList.add('button')
    p.innerHTML = `<h2 id = "startgame"> Start Game<h2>`
    result.appendChild(p)
    startgame()
}

function startgame(){
    const restart = document.querySelector('#startgame')
    restart.addEventListener('click', function (e){
        target = parseInt((Math.random()*100)+1)
        play=true
        preGuesses = []
        numguess = 0;
        prev.innerHTML = ``
        remaining.innerHTML = `${10-numguess}`
        userInput.removeAttribute('disabled')
        result.removeChild(p)
    })

}