let a = 0
let b = 1
let total = document.getElementById('total');
let dsd = document.getElementById('dsd');
let lkl = document.getElementById('lkl');
let sas = document.getElementById('sas')
let hgh = document.getElementById('hgh');
let kkk = document.getElementById('kkk');
let body = document.getElementById('sdf');
function makeRed() {
    body.style.backgroundColor = 'white';
   sas.style.color = 'black';
    kkk.style.color = 'black';
    hgh.style.color = 'black';
    dsd.style.color = 'black';
}

function makeGreen() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'black';
    sas.style.color = 'white';
    kkk.style.color = 'white';
    hgh.style.color = 'white';
    dsd.style.color = 'white';
}

function makeBlue() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'darkgoldenrod';
    sas.style.color = 'black';
    kkk.style.color = 'black';
    hgh.style.color = 'black';
    dsd.style.color = 'black';

}
function makeYellow() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'darkblue';
    sas.style.color = 'greenyellow';
    kkk.style.color = 'greenyellow';
    hgh.style.color = 'greenyellow';
    dsd.style.color = 'greenyellow';
}




function maker() {
    a=a-10
    total.innerText = a
    dsd.innerText=a+dsd.innerText
    if (a.value % 2 === 1){
        lkl.innerText= "Да"

    }
    else {
        lkl.innerText= "Нет"
    }
}
function make() {
    a=a-1
    total.innerText = a
    dsd.innerText=a+dsd.innerText
    if (a % 2 ){
        lkl.innerText= "Нет"
    }
    else {
        lkl.innerText= "Да"
    }
}
function makef() {
    a=a+1
    total.innerText=a
    dsd.innerText=a+dsd.innerText
    if (a % 2 ){
        lkl.innerText= "Нет"
    }
    else {
        lkl.innerText= "Да"
    }
}
function makeg() {
    a=a+10
    total.innerText=a
    dsd.innerText=a+dsd.innerText
    if (a % 2){
        lkl.innerText= "Нет"
    }
    else  {
        lkl.innerText= "Да"
    }
}