function myRandom(min, max) {
    let random = Math.random() * (max + 1 - min) + min
    let floor = Math.floor(random)

    return floor
}

let minInt = +prompt('Enter minimal number')
let maxInt = +prompt('Enter maximal number')

let answerUser = 0
let answerUserMinus = 0
for(let i = 0; i < 10; i++) {
    let num1 = myRandom(minInt, maxInt)
    let num2 = myRandom(maxInt, maxInt)
    let symbol = myRandom(1, 4);
    let symbolStr = ''
    let answerPr
    if (symbol === 1) {
        symbolStr = ' + ';
        answerPr = num1 + num2
    } else if(symbol === 2) {
        symbolStr = ' - ';
        answerPr = num1 - num2
    } else if(symbol === 3) {
        symbolStr = ' * ';
        answerPr = num1 * num2
    }else {
        symbolStr = ' / ';
        answerPr = num1 / num2
    }
    let pr = +prompt(num1 + symbolStr + num2 + ' =')
    let answer = answerPr === pr ? 'Good boy' : 'Mistake'
    num1 + num2 === pr ? answerUser++ : answerUserMinus++
    alert(num1 + symbolStr + num2 + ' = ' + answerPr + ' Your answer ' + pr + '. ' + answer)
}

alert('Right answers: ' + answerUser + '! Wrong answers: ' + answerUserMinus)