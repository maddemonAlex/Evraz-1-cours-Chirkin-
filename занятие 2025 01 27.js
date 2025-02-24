function make2() {
    let input = document.getElementById('d2');
    let input1 = document.getElementById('d4');
    let addElement2 = document.getElementById('li2');
    let a = +input1.value;

    if (input.value === '') {
        alert('Укажите город')
    }
    else {
        if (input1.value === '') {
            alert('Укажите сколько добавить')
        }
        else {
            for (let i = 0; i < a; i++) {
                let liElement2 = document.createElement('li');
                liElement2.innerText = input.value;
                addElement2.append(liElement2)
            }

            input.value = ''
        }
    }

}

function lek() {
    let input = document.getElementById('d1');
    let input1 = document.getElementById('d3');
    let addElement2 = document.getElementById('li1');
    let a = +input1.value;

    if (input.value === '') {
        alert('Укажите город')
    }
    else {
        if (input1.value === '') {
            alert('Укажите сколько добавить')
        }
        else {
            for (let i = 0; i < a; i++) {
                let liElement2 = document.createElement('li');
                liElement2.innerText = input.value;
                addElement2.append(liElement2)
            }

            input.value = ''
        }
    }
}


