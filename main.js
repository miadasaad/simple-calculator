let numbers = document.querySelectorAll('.number');
let result = document.querySelector('.result')

// for keyboaerd events
let equal = document.querySelector(".equal");
let arr = [];


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        calc(numbers[i].innerHTML)
    }, false)
}

//the full equation
function calc(element) {
    arr.push(element)
    result.innerHTML = arr.join('')
}

// keyboard events
document.addEventListener('keydown', keyboard);
function keyboard(e) {
    e.preventDefault()
    if (e.which == 13) {
        myanswer()
    }
    else if (e.which == 8) {
        clear()
    }
    else {
        calc(e.key)
    }
}

// clear button
document.getElementById("clear").addEventListener('click', clear)
function clear() {
    result.innerHTML = '';
    arr = []
}

//equal button
document.querySelector('.equal').addEventListener('click', myanswer)
function myanswer() {

    if (result.innerHTML != '') {

        result.innerHTML = eval(result.innerHTML);
        arr = []
        arr.push(result.innerHTML)
    }
}
