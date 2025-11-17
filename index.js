let firstNum = 1
let secondNum = 11
let thirdNum = 1

newGame = true
toContinue = true

let sum = firstNum + secondNum

if(sum<21){
    console.log('Do you want to continue?)')
    if (toContinue){
        let sum2 = sum + thirdNum;
        console.log('Sum: ', sum2)
        if(sum2<21){
            console.log('New Game?')
            if (newGame) {
                console.log('We will start new game in a few hours')
            } else{
                console.log('Byeee)')
            }
        } else if(sum === 21){
            console.log('You found the number I thought')
        } else{
            console.log('You are out of game')
        }
    }else{
        console.log('Good bye, see you soon)')
    }

} else if (sum===21){
    console.log('Congratulations you won!)')
} else{
    console.log('Unfortunately, you are out of game:(')
}

let age = 20.7;
if(age<21){
    console.log('You can not join in the club')
} else{
    console.log('Welcome to our club)')
}

// Booleans

let hasDiscountCode = true;

function processOrder(){
    if (hasDiscountCode){
        console.log('It is totaly free for you')
        hasDiscountCode = false
    } else{
        console.log('You have to pay 99$ for the first month')
    }
}

// Dice game
let num1 = getRandomDice()
let num2 = getRandomDice()
let num3 = getRandomDice()

let numDices = document.getElementById('dices')
let sumDices = document.getElementById('sum')
let startBut = document.getElementById('startButton')
let noGameBut = document.getElementById('noGame-btn')
let yesGameBut = document.getElementById('yesGame-btn')
let allData = document.querySelector('.texts')
let Congratulations = document.getElementById('congratsText')

let sumAll = num1 + num2

function startGame(){
    numDices.textContent += ` ${num1}`
    sumDices.innerText = `Sum: ${num1}`
    startBut.textContent = `Continue...`;
    noGameBut.style.display = 'block';
    yesGameBut.style.display = 'block';
    startBut.disabled = true;
}

function endGame(){
    console.log('endGame button clicked')
    allData.textContent = 'End Game'
    
}

// Loops

for (let count=1; count<=6; count+=1){
    console.log(count)
}

for (let count=10; count<=100; count+=10){
    console.log(count)
}
let msgs = ['txt1','txt2','txt3','txt4','txt5','txt6','txt7','txt8']
for(let i=0; i<msgs.length; i+=1){
    console.log(msgs[i])
}
// Random statements

function getRandomDice(){
    return (Math.floor(Math.random()*6)+1)
}

// Continue game

function gameContinue(){
    numDices.textContent += ` ${num2}`
    sumDices.textContent = `Sum: ${sumAll}`
    startBut.style.display = 'none'
    yesGameBut.style.display = 'none'
    noGameBut.textContent = 'End Game'
    if(sumAll>=10){
        Congratulations.textContent = 'Congratulations, you won the game'
    }else{
       Congratulations.textContent = 'Try, again later!' 
    }
}



