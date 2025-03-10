let listDOM = document.getElementById('list');
let inputName = document.getElementById('name');
let selectCategory = document.getElementById('category');
let inputPrice = document.getElementById('price');
let inputCount = document.getElementById('count');
let inputDiscount = document.getElementById('discount');
let inputDescription = document.getElementById('description');
let inputPick_up_point= document.getElementById('Pick-up_point');
let selectcolor = document.getElementById('color');
let categories = {
    'clothes': 'Одежда',
    'shoes': 'Обувь',
    'tools': 'Инструменты',
}
let color = {
    "white":'Белый',
    "black":'Чёрный',
}

let specialsObj = {
    'bu': 'Б/У',
    'fragile': 'Хрупкое',
}
let cashObj = {
    'paper': 'Наличные ',
    'card': 'Безналичные',
}

function discount(item) {
    let field = document.getElementById('discountDom')

    if (item) {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'flex', 'important')
    }
    else {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'none', 'important')
    }
}

function addTovar() {
    // находим активный радио-инпут, который выбран
    let discountChoose = document.querySelector('input[name=discount]:checked');

    // создаем контейнер для товара
    let cardTovar = document.createElement('div');
    cardTovar.classList.add('tovar');

    // создаем html наполнение для блока с ценой
    let price = ``;

    // проверим, а есть ли в discountChoose.value значение
    if (discountChoose.value === 'true') {
        // inputDiscount
        let disc = +inputPrice.value * +inputDiscount.value / 100;
        let newPrice = +inputPrice.value - disc;
        price = `<div class="tovar-price">
                    <div>Цена: </div>
                    <div>
                        <div class="tovar-price-old">${ inputPrice.value } руб.</div>
                        <div>${ newPrice } руб.</div>
                    </div>
                </div>`
    }
    else {
        price = `<div class="tovar-price">Цена: ${ inputPrice.value } руб.</div>`;
    }
    let cashText = '';
    let cash = document.querySelectorAll('input[name=cash]:checked');
    for (let i = 0; i < cash.length; i++) {
        // console.log(specials[i].value, specialsObj[specials[i].value]);
        cashText += ' ' + cashObj[cash[i].value];
    }

    // достаем все чекбоксы особенностей и генерируем текст
    let specialsText = '';
    let specials = document.querySelectorAll('input[name=specials]:checked');

    for (let i = 0; i < specials.length; i++) {
        // console.log(specials[i].value, specialsObj[specials[i].value]);
        specialsText += ' ' + specialsObj[specials[i].value];
    }

    let card = `<div class="tovar-name">${ inputName.value }</div>
            <div class="tovar-category">${ categories[selectCategory.value] }</div>
            <div class="tovar-color">${ categories[selectcolor.value] }</div>
            <div class="tovar-specials">Особенности: ${ specialsText }</div>
            <div class="tovar-description">Описание: ${ inputDescription.value }</div>
            <div class="tovar-description">Пункт выдачи: ${ inputPick_up_point.value }</div>
             <div class="tovar-cash">Оплата: ${ cashText }</div>
            <div class="tovar-price-count">
                ${ price }
                <div class="count">Количество: ${ inputCount.value } шт.</div>
            </div>
            <div class="tovar-close">X</div>`

    cardTovar.innerHTML = card;
    listDOM.append(cardTovar);
}