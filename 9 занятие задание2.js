function makeRed() {
    let name=prompt('Укажите текст')
    console.log(name);
    let body = document.getElementById('change');
    body.innerText= name;
}