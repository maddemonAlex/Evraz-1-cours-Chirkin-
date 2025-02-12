// function make2() {
//     let input = document.getElementById('d2');
//     let liElement = document.createElement('li');
//     let addElement = document.getElementById('li2');
//     liElement.innerText = input.value;
//     addElement.append(liElement);
//     let input1 = document.getElementById('d4');
//     let liElement2 = document.createElement('li');
//     let addElement3 = document.getElementById('li2');
//     addElement3.append(liElement2);
//     input1.value = ''
// }

function ler() {
    let input = document.getElementById('d1');
    let input1 = document.getElementById('d3');
    let addElement2 = document.getElementById('li1');



    for (let i = 0; i < 5; i++) {
        let liElement2 = document.createElement('li');
        liElement2.innerText = input.value;
        addElement2.append(liElement2);
    }

    input.value = ''

}

