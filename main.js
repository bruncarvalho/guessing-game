//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10) //random gera um número aleatório, multiploca por 10, e arredonda para número inteiro com o round

let numAttempts = 1 //número de tentativas

//Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterClick)

//functiongit commit -m "first commit"
function handleTryClick (event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')
    const inputValue = Number(inputNumber.value)

    if (inputValue < 0 || inputValue > 10) {
        alert('você precisa digitar um número entre 0 e 10')

        return
    }

    if (inputValue === randomNumber) {
        toggleSreen()
        document.querySelector('.screen2 h2').innerText = `Você acertou em ${numAttempts} tentativas`

        
    }
    

    inputNumber.value = ""
    numAttempts++
}

function enterClick (event) {
    if (event.key === 'Enter' && screen1.classList.contains('hide')) {
        console.log(event)
        handleResetClick()
    }
}


function handleResetClick() {
    toggleSreen()
    numAttempts = 1
    randomNumber = Math.round(Math.random() * 10) //random gera um número aleatório, multiploca por 10, e arredonda para número inteiro com o round

}

function toggleSreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}