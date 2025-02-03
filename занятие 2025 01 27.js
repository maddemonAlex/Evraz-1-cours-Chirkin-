function make() {
    let input = document.getElementById('d1');
    let liElement = document.createElement('li');
    let addElement = document.getElementById('li1');
    liElement.innerText = input.value;
    addElement.append(liElement);
    input.value = ''
}

function make2() {
    let input = document.getElementById('d2');
    let liElement = document.createElement('li');
    let addElement = document.getElementById('li2');
    liElement.innerText = input.value;
    addElement.append(liElement);
    input.value = ''
}
function ler(){
    let input = document.getElementById('d3');
    let liElement = document.createElement('li');
    let addElement = document.getElementById('li1');
    liElement.innerText = input.value;
    addElement.append(liElement);
    input.value = ''
}
function len(){
    let input = document.getElementById('d4');
    let liElement = document.createElement('li');
    let addElement = document.getElementById('li2');
    liElement.innerText * input.value;
    addElement.append(liElement);
    input.value = ''
}