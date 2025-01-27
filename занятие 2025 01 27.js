let i = 4;

function make() {
    let input = document.getElementById('d1');
    let span = document.getElementById('span1');
    span.innerText = span.innerText + input.value;
    input.value = ''
}
