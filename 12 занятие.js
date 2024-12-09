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
    a=0
    if (a === 0) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        total.innerText=0
    }
}

function make() {
    a=1
    if (a = 1) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        total.innerText=1
    }
}
function makef() {
    a=2
    if (a = 2) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'blue';
        body.style.color = 'white';
        total.innerText=2
    }
}
function makeg() {
    a=5
    if (a = 5) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'green';
        body.style.color = 'white';
        total.innerText=5
    }
}
function maket() {
    a=a+1
    if (a % 2 === 0) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'red';
        body.style.color = 'black';
        total.innerText=a
    }
    else {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'gold';
        body.style.color = 'black';
        total.innerText=a
    }
}
function makew() {
    a=a-1
    if (a % 2 === 1) {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'gold';
        body.style.color = 'black';
        total.innerText=a
    }
    else {
        let body = document.getElementById('body');
        body.style.backgroundColor = 'red';
        body.style.color = 'black';
        total.innerText=a
    }
}