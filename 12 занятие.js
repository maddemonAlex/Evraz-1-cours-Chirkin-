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
let total = document.getElementById('total');

function maker() {
    a=0
    let body = document.getElementById('body');
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    total.innerText = a
}

function make() {
    a=1
    let body = document.getElementById('body');
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    total.innerText = a
}
function makef() {
    a=2
    let body = document.getElementById('body');
    body.style.backgroundColor = 'blue';
    body.style.color = 'white';
    total.innerText=a
}
function makeg() {
    a=5
    let body = document.getElementById('body');
    body.style.backgroundColor = 'green';
    body.style.color = 'white';
    total.innerText=a
}
function maket() {
    a=a+1
    let body = document.getElementById('body');
    total.innerText=a

    if (a === 0) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
    else if (a === 1) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
    else if (a === 2) {
        body.style.backgroundColor = 'blue';
        body.style.color = 'white'}
    else if (a === 5){
        body.style.backgroundColor = 'green';
        body.style.color = 'white';}
    else if (a % 2 === 0) {
        body.style.backgroundColor = 'red';
        body.style.color = 'black';
    }
    else {
        body.style.backgroundColor = 'gold';
        body.style.color = 'black';
    }
}


function makew() {
    a=a-1
    let body = document.getElementById('body');
    total.innerText=a

    if (a === 0) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
    else if (a === 1) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
    else if (a === 2) {
        body.style.backgroundColor = 'blue';
        body.style.color = 'white'}
    else if (a === 5){
        body.style.backgroundColor = 'green';
        body.style.color = 'white';}
    else if (a % 2 === 1) {
        body.style.backgroundColor = 'red';
        body.style.color = 'black';
    }
    else {
        body.style.backgroundColor = 'gold';
        body.style.color = 'black';
    }
}