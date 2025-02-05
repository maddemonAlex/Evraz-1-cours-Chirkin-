function make() {
    let input = document.getElementById('d1');
    let liElement = document.createElement('li');
    let addElement = document.getElementById('li1');

    liElement.innerText = input.value;
    addElement.append(liElement);
    input.value = ''
    let input1 = document.getElementById('d3');
}

function make2() {
    let input = document.getElementById('d2');
    let liElement = document.createElement('li');
    let addElement = document.getElementById('li2');
    liElement.innerText = input.value;
    addElement.append(liElement);
    let input1 = document.getElementById('d4');
    let liElement2 = document.createElement('li');
    let addElement3 = document.getElementById('li2');
    addElement3.append(liElement2);
    input1.value = ''
}

let i = input

function ler() {
    let input = document.getElementById('d3');
    let liElement = document.createElement('li');
    let addElement = document.getElementById('li1');
    let i = input.innerText * input1.innerText
    addElement.append(liElement);
    input.value = i
    // input.value = ''
}

