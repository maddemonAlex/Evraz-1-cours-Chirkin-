// let a= 10
// let b = 15
//
// if ( a > b) {
//     console.log('a больше b')
// }
// else {
//     console.log('a равна или меньше b')
// }
// console.log('лог снаружи if');

let a = 0
let b = 1

function maker() {
    if (a === 0) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'black';
        let total = document.getElementById('total');
        total.style.backgroundColor = 'white';
    }
}

function make() {
    if (a < 1) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'white';
    }
}
function makef() {
    if (a < 2) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'blue';
    }
}
function makeg() {
    if (a < 2) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'green';
    }
}
function maket() {
    a=a+1
    if (a % 2 === 0) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'reb';
    }
}
else{
    let body = document.getElementById('body');
    body.style.backgroundColor = 'reb';
}