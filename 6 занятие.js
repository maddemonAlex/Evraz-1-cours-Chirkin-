// let a = 1;
// let b = "sadasdfs";
// let c = true;
// let d = null;
// let t = a;
// let r = a + t;
// console.log('Здесь я проверяю значения в своих данных');
// console.log(r);
//  console.log(r, a, t, d);
// let hello = 'Привет, ';
// let name = 'Павел';
// let st = hello + name;
// console.log(st);
// console.log(hello + name);
//
// console.log(a);
//  a = a + a;
//  a = a + a;
// console.log(a);
//
// let span = document.getElementById('answer2');
// span.innerText = 5;
//
// выодит сообщение на экран
// alert('Hello world')
//
// let name=prompt('Укажите ваше имя')
// console.log(name);
//
// confirm-окно для ыбора ответа (да/нет)
// let resylt= confirm('Мы изучаем JS?')


let a = prompt('Укажите первое слагаемое')
 a =+a
let b = prompt('Укажите второе слагаемое')
b= +b
console.log('Сумма', a + b)

let span = document.getElementById('answer');
span.innerText = a + b;