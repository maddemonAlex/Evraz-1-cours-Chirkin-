let total = document.getElementById('span1')
let a = document.getElementById('d1');

function make() {
    if (a.value % 2 === 1) {
        total.innerText = 'Введённое число нечетное'
    }
    else {
        total.innerText = 'Введённое число четное'
    }
}