function makeRed() {
    let name=alert('Укажите текст')
    console.log(name);
    let body = document.getElementById('change');
    body.innerText= name;
}