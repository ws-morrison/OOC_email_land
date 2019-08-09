/* 
ВВОДНЫЕ:
B3 - Текущий размер базы
B4 - Трафик на сайте в месяц
B5 - Конверсия на покупку на сайте
B6 - Средний чек

ФОРМУЛА
B3*4*20%*30%*B5*B6+(10%*B4)

КОНСТАНТЫ
4, 20%, 30%, 10%,
*/

// Const
const C1 = 4;
const C2 = 20 / 100;
const C3 = 30 / 100;
const C4 = 10 / 100;

// Vars
// B3 - Текущий размер базы 
var inputNum1 = document.querySelector('#calcB3');

// B4 - Трафик на сайте в месяц
var inputNum2 = document.querySelector('#calcB4');

// B5 - Конверсия на покупку на сайте
var inputNum3 = document.querySelector('#calcB5');

// B6 - Средний чек
var inputNum4 = document.querySelector('#calcB6');


var templateOutput = document.querySelector('#calc-output');


// // Формула
var revenue = function(x1,x2,x3,x4) {
    var result =  x1*C1*C2*C3*(x3/100)*x4+(C4*x2);
    return Math.floor((result));
}

var setResult = function() {
    var param1 = inputNum1.value;
    var param2 = inputNum2.value;
    var param3 = inputNum3.value;
    var param4 = inputNum4.value;

    templateOutput.value = revenue(param1, param2,param3, param4);
    if (templateOutput.value > 99999999999) {
        templateOutput.value = null;
        templateOutput.placeholder = 'Упс, кажется что-то не так'
    }
}

inputNum1.addEventListener('input', setResult);
inputNum2.addEventListener('input', setResult);
inputNum3.addEventListener('input', setResult);
inputNum4.addEventListener('input', setResult);